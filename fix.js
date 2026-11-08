const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\subha\\Desktop\\influcon\\bmc\\src\\components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

let replacements = [
  [/Comprehensive Servicing Solutions, Critical Spare Part Support, And Digitization Services Designed To Improve Equipment/g, "Comprehensive servicing solutions, critical spare part support, and digitization services designed to improve equipment"],
  [/Reliability, Operational Efficiency, And Long-Term System Performance\./g, "reliability, operational efficiency, and long-term system performance."],
  [/Condition Monitoring And Predictive/g, "Condition monitoring and predictive"],
  [/Maintenance Of Power Systems/g, "maintenance of power systems"],
  
  [/Beginning Of BMC At Kolkata, WB, India With Epoxy Cast Slip Ring Assembly For HT Motors And Post Insulators/g, "Beginning of BMC at Kolkata, WB, India with epoxy cast slip ring assembly for HT motors and post insulators"],
  [/Support Subsidiaries Of Organizations From United Kingdom For MV Switchgear Modules/g, "Support subsidiaries of organizations from United Kingdom for MV switchgear modules"],
  [/Resin Cast Bushings For MV Applications/g, "Resin cast bushings for MV applications"],
  [/Development Of Resin Cast Current Transformers For MV Applications/g, "Development of resin cast current transformers for MV applications"],
  [/MV Retrofit Solutions For Oil Circuit Breakers \(SOCB And MOCB\)/g, "MV retrofit solutions for oil circuit breakers (SOCB and MOCB)"],
  
  // switchgear -> switchgear (plural to singular except when needed)
  [/\bSwitchgears\b/g, "Switchgear"],
  [/\bswitchgears\b/g, "switchgear"],
  
  // Hyphenation
  [/Sub Assemblies/gi, "Sub-Assemblies"],
  [/Tailor Made/gi, "Tailor-Made"],
  [/Medium Voltage/gi, "Medium-Voltage"],
  [/In House/gi, "In-House"],
  [/High Power/gi, "High-Power"],
  
  [/Advanced Partner Panel Builder With\\nGlobal MNC/g, "Advanced partner panel builder with\\nglobal MNC"],
  [/Medium-Voltage Epoxy Components/gi, "Medium-voltage epoxy components"],
  [/Vacuum Circuit Breakers \(VCB\) for\\nOutdoor/gi, "Vacuum circuit breakers (VCB) for\\noutdoor"],
  [/Voltage Detecting Live Line Indicator/gi, "Voltage detecting live line indicator"],
  [/36 kV Double Pole Vacuum Contactor/gi, "36 kV double pole vacuum contactor"],
  [/25 kV Single Pole Primary Voltage\\nTransformer/gi, "25 kV single pole primary voltage\\ntransformer"],
  
  [/Pioneers In Switchgear Mechanism Design In India/g, "Pioneers in switchgear mechanism design in India"],
  [/Unique Low Cost CSS Design For Windmills In India/g, "Unique low cost CSS design for windmills in India"],
  [/First In Asia To Offer Technology Of VCB\/VI Design To European & Overseas Companies/g, "First in Asia to offer technology of VCB/VI design to European & overseas companies"],
  [/Experience Of Manufacturing Custom Built Self Designed Epoxy Cast Switchgear Components/g, "Experience of manufacturing custom built self-designed epoxy cast switchgear components"],
  [/Over 25 Patents\/Design Registrations On Switchgear\/ Components Of Switchgear/g, "Over 25 patents/design registrations on switchgear/components of switchgear"],
  [/Experience Of Manufacturing Custom Built Self-Designed Epoxy Cast Dry Type Instrument Transformers \(CTS\/PTs\) Both For Indoor & Outdoor Applications/g, "Experience of manufacturing custom-built self-designed epoxy cast dry type instrument transformers (CTs/PTs) both for indoor & outdoor applications"],
  [/Unique Compact Design Of MV Vacuum Contactors/g, "Unique compact design of MV vacuum contactors"],
  [/Experience In Successful Design And Commissioning For Over VCBs Of Over 25 Different Versions/g, "Experience in successful design and commissioning for over VCBs of over 25 different versions"],
  [/First In India To Offer Technology Of VCB\/VI Design To Indian Manufacturers/g, "First in India to offer technology of VCB/VI design to Indian manufacturers"],
  [/Pioneers In Epoxy Cast Vacuum Interrupter \(Embedded Poles\) For Vacuum Contactors Worldwide/g, "Pioneers in epoxy cast vacuum interrupter (embedded poles) for vacuum contactors worldwide"],
  [/BMC Electroplast Has Established Itself As A Technology And Manufacturing Center For Power Systems Equipment/g, "BMC Electroplast has established itself as a technology and manufacturing center for power systems equipment"],
  [/Such As Medium-Voltage Switchgear, Instrument Transformers And Various Cast Resin Components/g, "such as medium-voltage switchgear, instrument transformers, and various cast resin components"],
  
  [/We Excel In Specialized Fields That Keep Your Systems Running At Peak Performance\./g, "We excel in specialized fields that keep your systems running at peak performance."],
  
  [/The Services Offered and the USPs\\nof BMC/g, "The services offered and the USPs\\nof BMC"],
  [/The Services Offered and the USPs/g, "The services offered and the USPs"]
];

for (let file of files) {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');
  let original = content;
  for (let [regex, replace] of replacements) {
    content = content.replace(regex, replace);
  }
  
  if (content !== original) {
    fs.writeFileSync(path.join(dir, file), content);
    console.log('Updated ' + file);
  }
}
