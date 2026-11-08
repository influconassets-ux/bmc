import React, { useState } from "react";
import { s } from "../styles";
import { motion } from "framer-motion";

export default function CareersForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState("");
  const [fileName, setFileName] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Remove the file object from the data payload as we handle it separately
    delete data.attachment;

    const scriptUrl = "https://script.google.com/macros/s/AKfycbyMZqzGirpKJqJC7PrO2D-TvOFzhyAv9Vim_VsjxTcFyvIFFqKp2OOlZKpPBL9p2KPp/exec";
    const fileField = form.querySelector('input[type="file"]');
    const file = fileField ? fileField.files[0] : null;

    const sendRequest = async (payload) => {
      try {
        const response = await fetch(scriptUrl, {
          method: "POST",
          body: JSON.stringify(payload),
        });
        const resultData = await response.json();
        if (resultData.success) {
          setResult("Application submitted successfully!");
          form.reset();
          setFileName("");
        } else {
          console.error("Error", resultData);
          setResult("Error submitting form");
        }
      } catch (error) {
        console.error(error);
        setResult("Something went wrong!");
      } finally {
        setIsSubmitting(false);
      }
    };

    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const base64String = e.target.result.split(',')[1];
        data.fileBase64 = base64String;
        data.fileName = file.name;
        data.mimeType = file.type;
        
        sendRequest(data);
      };
      reader.onerror = function (error) {
        console.error("Error reading file", error);
        setResult("Error reading file");
        setIsSubmitting(false);
      };
      reader.readAsDataURL(file);
    } else {
      sendRequest(data);
    }
  };

  return (
    <section className="careersFormSection" style={{ ...s.careersFormSection, paddingBottom: "120px" }}>
      <div className="careersFormInner" style={s.careersFormInner}>
        <motion.h2 
          className="careersFormMainTitle" 
          style={s.careersFormMainTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
        >
          BUILD YOUR FUTURE WITH BMC
        </motion.h2>
        <motion.p 
          className="careersFormMainSubtitle" 
          style={s.careersFormMainSubtitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.1 }}
        >
          We're Always Looking For Passionate Professionals Eager To Learn, Innovate, And Make An Impact. Join BMC Electroplast To Grow Your Career, Take On Meaningful Challenges, And Contribute To Powering Industries Across India And Beyond.
        </motion.p>

        <motion.div 
          className="careersFormBox" 
          style={s.careersFormBox}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="careersFormBoxTitle" style={s.careersFormBoxTitle}>Application Form</h3>
          <p className="careersFormBoxSubtitle" style={s.careersFormBoxSubtitle}>Fill Out The Form Below And Our Team Will Review Your Application Shortly.</p>

          <form className="careersFormElement" style={s.careersFormElement} onSubmit={onSubmit}>
            <div className="careersFormRow" style={s.careersFormRow}>
              <div className="careersFormGroup" style={s.careersFormGroup}>
                <input type="text" name="name" placeholder="Your Full Name" className="careersInput" style={s.careersInput} required />
              </div>
              <div className="careersFormGroup" style={s.careersFormGroup}>
                <input type="email" name="email" placeholder="Email Address" className="careersInput" style={s.careersInput} required />
              </div>
            </div>
            
            <div className="careersFormRow" style={s.careersFormRow}>
              <div className="careersFormGroup" style={s.careersFormGroup}>
                <input type="tel" name="phone" placeholder="Phone Number" className="careersInput" style={s.careersInput} />
              </div>
              <div className="careersFormGroup" style={s.careersFormGroup}>
                <input type="text" name="location" placeholder="Current Location" className="careersInput" style={s.careersInput} />
              </div>
            </div>

            <div className="careersFormRow" style={s.careersFormRow}>
              <div className="careersFormGroup" style={s.careersFormGroup}>
                <input type="text" name="experience" placeholder="Years Of Experience" className="careersInput" style={s.careersInput} />
              </div>
              <div className="careersFormGroup" style={s.careersFormGroup}>
                <select name="role" className="careersSelect" style={s.careersSelect} defaultValue="" required>
                  <option value="" disabled>Which Role Are You Applying For?</option>
                  <option value="Technical Sales And Marketing">Technical Sales And Marketing</option>
                  <option value="Operational Planning And Production">Operational Planning And Production</option>
                  <option value="Quality Assurance And Audits">Quality Assurance And Audits</option>
                  <option value="Research And Design Development">Research And Design Development</option>
                  <option value="Testing">Testing</option>
                  <option value="Finance And Accounts">Finance And Accounts</option>
                  <option value="HR And Admin">HR And Admin</option>
                  <option value="Commercial And Tendering">Commercial And Tendering</option>
                </select>
              </div>
            </div>

            <div className="careersFormGroup" style={s.careersFormGroup}>
              <label className="careersLabel" style={s.careersLabel}>Cover Letter: (Optional)</label>
              <textarea name="message" placeholder="Value Something About Yourself" className="careersTextarea" style={s.careersTextarea}></textarea>
            </div>

            <div className="careersFormGroup" style={s.careersFormGroup}>
              <label className="careersLabel" style={s.careersLabel}>Upload Your Resume (Optional)</label>
              <div className="careersUploadBox" style={{ ...s.careersUploadBox, position: "relative" }}>
                <input type="file" name="attachment" accept=".pdf,.doc,.docx,.jpg,.png" onChange={(e) => setFileName(e.target.files[0]?.name || "")} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0, cursor: "pointer", zIndex: 10 }} />
                <svg className="careersUploadIcon" style={s.careersUploadIcon} viewBox="0 0 24 24">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                <div className="careersUploadText" style={s.careersUploadText}>
                  {fileName ? (
                    <span style={{ color: "#4CAF50", fontWeight: "bold" }}>Selected: {fileName}</span>
                  ) : (
                    "Select A File Or Drag And Drop Here"
                  )}
                </div>
                {!fileName && <div className="careersUploadSubtext" style={s.careersUploadSubtext}>(JPG, PNG Or PDF, File Size No More Than 10MB)</div>}
              </div>
            </div>

            <button type="submit" className="careersSubmitBtn" style={s.careersSubmitBtn} disabled={isSubmitting}>
              {isSubmitting ? "APPLYING..." : "APPLY"}
            </button>
            {result && <p style={{ color: "#fff", marginTop: "15px", fontSize: "14px", textAlign: "center" }}>{result}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
