import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact-form'
import { CTASection } from '@/components/sections/cta'
import { SuburbPageSchema, FAQPageSchema, BreadcrumbSchema } from '@/components/schema'
import { CheckCircle2, ShieldCheck, Phone, Stethoscope, HeartPulse } from 'lucide-react'
import { CtaUncertaintyReducer } from '@/components/sections/cta-uncertainty-reducer'

// Define the suburb data mapping
interface SuburbData {
  id: string
  name: string
  region: string
  nearestHospital: string
  description: string
  surroundingSuburbs: string
  localHealthcareFocus: string
  localSpecificText?: string
}

function getLocalText(data: SuburbData): string {
  const regionPhrases: Record<string, string> = {
    'Western Suburbs': `We provide regular home visits by Registered Nurses across the Western Suburbs, helping residents manage clinical needs safely in their own homes.`,
    'Perth South-East': `Our nursing team covers the South-East metropolitan area, offering clinical assessments, wound care, and medication support directly in the community.`,
    'Perth South': `For residents in Perth's southern corridor, our Registered Nurses deliver professional in-home clinical care tailored to your recovery and health management goals.`,
    'Inner North': `We service the inner-north suburbs, providing essential clinical services including vital signs tracking, wound management, and support coordination.`,
    'Fremantle Area': `Our Registered Nurses travel throughout the Fremantle region, delivering qualified clinical care to support post-hospital recovery and independent living.`,
    'Inner South': `We offer clinical home nursing visits across the inner-south suburbs, coordinating care to help clients maintain health and comfort at home.`,
    'Inner East': `Our in-home nursing services are available to families in the inner-east region, providing professional clinical support by qualified Registered Nurses.`,
    'Northern Suburbs': `We extend our professional clinical nursing visits to the northern suburbs, ensuring access to registered nursing care close to home.`,
    'Eastern Suburbs': `Our clinical home nursing support covers the eastern corridor, providing registered nurse visits for wound management, injections, and health checks.`,
  };

  const basePhrase = regionPhrases[data.region] || `Our clinical home nursing services are available to residents across the Perth metropolitan area.`;
  return `At Care N Cure, we are committed to delivering honest, professional nursing care. ${basePhrase} Specifically servicing the ${data.name} area, we support patients in nearby areas like ${data.surroundingSuburbs}. Our care is tailored around ${data.localHealthcareFocus}, working in cooperation with local general practitioners, specialists, and regional healthcare hubs like ${data.nearestHospital} to support your ongoing recovery.`;
}

const suburbsMap: Record<string, SuburbData> = {
  nedlands: {
    id: 'nedlands',
    name: 'Nedlands',
    region: 'Western Suburbs',
    nearestHospital: 'Sir Charles Gairdner Hospital & Hollywood Private',
    description: 'Serving Nedlands, Dalkeith, and Crawley with professional in-home clinical nursing. Ideal for post-surgical recovery, wound care, and medication management.',
    surroundingSuburbs: 'Dalkeith, Crawley, and Shenton Park',
    localHealthcareFocus: 'post-operative surgical recovery, clinical assessments, and GP communication',
    localSpecificText: 'Nedlands sits right beside the Queen Elizabeth II Medical Centre, home to Sir Charles Gairdner Hospital and Hollywood Private Hospital — two of the hospitals our Nedlands clients are most often discharged from. That proximity means faster handovers and closer coordination with your treating team. We actively cover Nedlands and are ready to visit within 24–48 hours.',
  },
  subiaco: {
    id: 'subiaco',
    name: 'Subiaco',
    region: 'Western Suburbs',
    nearestHospital: 'Sir Charles Gairdner Hospital & Hollywood Private',
    description: 'Providing in-home registered nurse visits across Subiaco, Jolimont, and Shenton Park. Sterile wound dressing changes and GP clinical coordination.',
    surroundingSuburbs: 'Jolimont, West Perth, and Daglish',
    localHealthcareFocus: 'sterile wound care, catheter changes, and medication reconciliation',
    localSpecificText: 'Subiaco is centrally located near some of Perth\'s leading medical clinics and hospitals. Our Registered Nurses frequently coordinate post-discharge plans with specialists along Subiaco\'s medical strips. Whether you are returning home from an ortho procedure at SJOG Subiaco or SCGH, we provide expert clinical nursing visits within 24–48 hours of your call.',
  },
  cottesloe: {
    id: 'cottesloe',
    name: 'Cottesloe',
    region: 'Western Suburbs',
    nearestHospital: 'Sir Charles Gairdner Hospital & Hollywood Private',
    description: 'Delivering companion care, medication management, and mobility support for seniors in Cottesloe, Swanbourne, and Peppermint Grove.',
    surroundingSuburbs: 'Swanbourne, Peppermint Grove, and Mosman Park',
    localHealthcareFocus: 'elderly clinical support, mobility assistance, and dedicated nurse checks',
    localSpecificText: 'For our Cottesloe clients, we offer specialized geriatric support and post-hospital nursing visits. Our founder Jinu supervises all clinical assessments in the coastal suburbs, working closely with local GP clinics to maintain your safety, independence, and comfort at home. We actively cover Cottesloe and are ready to visit within 24–48 hours.',
  },
  gosnells: {
    id: 'gosnells',
    name: 'City of Gosnells',
    region: 'Perth South-East',
    nearestHospital: 'Armadale Kelmscott Memorial Hospital',
    description: 'Providing in-home nursing care, wound management, medication support, and post-hospital recovery across the City of Gosnells, including Gosnells, Maddington, Kenwick, and Thornlie.',
    surroundingSuburbs: 'Maddington, Kenwick, Thornlie, and Huntingdale',
    localHealthcareFocus: 'chronic illness monitoring, post-hospital transition care, and home nursing',
    localSpecificText: 'Our registered nurses provide home nursing services across Gosnells, Maddington, Kenwick, and Thornlie. For clients returning home from facilities like Armadale Kelmscott Memorial Hospital, we accept referrals from discharge teams and work alongside local GPs to support continuous recovery at home within 24–48 hours.',
  },
  armadale: {
    id: 'armadale',
    name: 'Armadale',
    region: 'Perth South-East',
    nearestHospital: 'Armadale Health Service (Armadale Kelmscott Memorial Hospital)',
    description: 'Professional in-home nursing care, community nursing, and aged care at home across Armadale, Kelmscott, Seville Grove, Mount Nasura, Mount Richon, Roleystone, Bedfordale, Wungong, and Champion Lakes.',
    surroundingSuburbs: 'Kelmscott, Seville Grove, Mount Nasura, Mount Richon, and Roleystone',
    localHealthcareFocus: 'post-hospital recovery, sterile wound dressings, medication safety, and community nursing',
    localSpecificText: 'Care N Cure delivers dedicated in-home registered nursing care across Armadale and surrounding south-east Perth suburbs. Operating from our Harrisdale base, our registered nurses visit clients across Armadale, Kelmscott, Seville Grove, and nearby suburbs. We accept referrals from hospital discharge planners, GPs, and families, providing structured in-home clinical assessments within 24 to 48 hours of enquiry.',
  },
  rockingham: {
    id: 'rockingham',
    name: 'Rockingham',
    region: 'Perth South',
    nearestHospital: 'Rockingham General Hospital',
    description: 'Professional in-home nursing care, sterile wound dressings, and medication management across Rockingham, Baldivis, and the surrounding southern corridor.',
    surroundingSuburbs: 'Safety Bay, Shoalwater, Waikiki, and Baldivis',
    localHealthcareFocus: 'hospital discharge coordination, vital signs tracking, and respite support',
    localSpecificText: 'We actively support families across Rockingham and Baldivis. For clients returning home from facilities like Rockingham General Hospital, our registered nurses accept referrals and liaise with treating doctors to ensure wound care supplies and medication safety measures are established safely at home within 24–48 hours.',
  },
  applecross: {
    id: 'applecross',
    name: 'Applecross',
    region: 'Perth South',
    nearestHospital: 'Fiona Stanley Hospital & St John of God Murdoch',
    description: 'Providing in-home private nursing visits and post-operative recovery around Applecross, Mount Pleasant, and Ardross.',
    surroundingSuburbs: 'Mount Pleasant, Ardross, and Alfred Cove',
    localHealthcareFocus: 'private nursing care, post-surgical rehabilitation, and specialist handovers',
    localSpecificText: 'Our Registered Nurses support Applecross residents returning home from local facilities like St John of God Murdoch or Fiona Stanley Hospital, providing professional wound care and medication management in communication with your treating GP. We actively cover Applecross and arrange visits within 24–48 hours.',
  },
  'mount-lawley': {
    id: 'mount-lawley',
    name: 'Mount Lawley',
    region: 'Inner North',
    nearestHospital: 'Royal Perth Hospital',
    description: 'Registered nurse visits, blood pressure monitoring, subcutaneous injections, and complex medication safety in Mount Lawley, Highgate, and Inglewood.',
    surroundingSuburbs: 'Highgate, Inglewood, Menora, and North Perth',
    localHealthcareFocus: 'subcutaneous injections, blood pressure monitoring, and complex medication safety',
    localSpecificText: 'Our nursing team serves Mount Lawley and surrounding inner-north areas. We accept referrals for clients returning home from facilities like Royal Perth Hospital, coordinating clinical nursing care at home alongside your treating doctor. We can visit Mount Lawley clients within 24–48 hours.',
  },
  fremantle: {
    id: 'fremantle',
    name: 'Fremantle',
    region: 'Fremantle Area',
    nearestHospital: 'Fiona Stanley Hospital & Fremantle Hospital',
    description: 'Post-hospital recovery care, wound management, and nursing-led respite care in Fremantle, East Fremantle, and South Fremantle.',
    surroundingSuburbs: 'East Fremantle, South Fremantle, and Beaconsfield',
    localHealthcareFocus: 'respite nursing, post-hospital recovery, and medical care planning',
    localSpecificText: 'For residents in Fremantle, South Fremantle, and East Fremantle, we offer comprehensive post-surgical recovery and clinical nursing. For clients returning home from facilities like Fiona Stanley Hospital or Fremantle Hospital, we accept referrals from discharge teams to organise home nursing within 24–48 hours.',
  },
  'south-perth': {
    id: 'south-perth',
    name: 'South Perth',
    region: 'Inner South',
    nearestHospital: 'Royal Perth Hospital & Fiona Stanley Hospital',
    description: 'Companion care, respite nursing, and active medication reconciliation in South Perth, Como, and Kensington.',
    surroundingSuburbs: 'Como, Kensington, and Manning',
    localHealthcareFocus: 'medication management, companion care, and GP clinical coordination',
    localSpecificText: 'We support families across South Perth, Como, and Manning. For clients returning home from facilities such as Royal Perth Hospital or St John of God Murdoch, we accept referrals from discharge teams and families to help put nursing care in place within 24–48 hours of return home.',
  },
  claremont: {
    id: 'claremont',
    name: 'Claremont',
    region: 'Western Suburbs',
    nearestHospital: 'Sir Charles Gairdner Hospital & Hollywood Private',
    description: 'Sterile wound care, post-surgical dressing changes, and registered nurse home visits in Claremont, Karrakatta, and Mount Claremont. Wound infections caught early. Medication checks on every visit.',
    surroundingSuburbs: 'Karrakatta, Mount Claremont, and Swanbourne',
    localHealthcareFocus: 'sterile wound dressing changes, post-operative care, and clinical home nursing assessments',
    localSpecificText: 'Many Claremont residents recovering from surgery at Hollywood Private Hospital or Bethesda Hospital need professional wound care at home before they can safely manage independently. Care N Cure provides sterile wound dressing changes in Claremont — our Registered Nurses use clinical-grade technique and document wound healing progress after every visit, sharing updates directly with your surgeon or GP. We cover Claremont, Swanbourne, Cottesloe, and Mosman Park, and can arrange a nursing visit within 24–48 hours of your call.',
  },
  inglewood: {
    id: 'inglewood',
    name: 'Inglewood',
    region: 'Inner North',
    nearestHospital: 'Royal Perth Hospital',
    description: 'Registered nurse visits, sterile dressings, injections, and blood pressure monitoring in Inglewood, Maylands, and Bedford.',
    surroundingSuburbs: 'Maylands, Bedford, and Bayswater',
    localHealthcareFocus: 'wound care management, vital signs tracking, and medication safety support',
    localSpecificText: 'We provide home nursing across Inglewood, Mount Lawley, and Bedford, working alongside GPs and specialists along the Beaufort Street medical precinct. We actively cover Inglewood and can visit within 24–48 hours, coordinating with Royal Perth and Sir Charles Gairdner Hospitals for post-hospital care.',
  },
  booragoon: {
    id: 'booragoon',
    name: 'Booragoon',
    region: 'Perth South',
    nearestHospital: 'Fiona Stanley Hospital & St John of God Murdoch',
    description: 'In-home registered nurse visits across Booragoon, Myaree, and Kardinya. Post-surgical recovery, wound care, and medication management close to Garden City.',
    surroundingSuburbs: 'Myaree, Kardinya, and Alfred Cove',
    localHealthcareFocus: 'post-surgical wound dressings, mobility support, and medication checks',
    localSpecificText: 'We provide clinical home visits in Booragoon and neighboring southern suburbs. Our Registered Nurses coordinate care with Fiona Stanley Hospital and medical centers near Westfield Booragoon, ensuring safe medication administration and wound management at home. We actively cover Booragoon and can arrange a visit within 24–48 hours.',
  },
  'canning-vale': {
    id: 'canning-vale',
    name: 'Canning Vale',
    region: 'Perth South-East',
    nearestHospital: 'Fiona Stanley Hospital',
    description: 'Home nursing care in Canning Vale, Willetton, and Riverton. Registered nurses providing post-hospital support, wound dressings, and chronic disease monitoring.',
    surroundingSuburbs: 'Willetton, Riverton, and Southern River',
    localHealthcareFocus: 'chronic disease management, registered nurse assessments, and home care package support',
    localSpecificText: 'We support families across Canning Vale, Willetton, and Riverton. We actively cover Canning Vale and are ready to visit within 24–48 hours. Patients transitioning back home after procedures at Fiona Stanley Hospital or St John of God Murdoch can expect prompt care coordination and clinical handovers before discharge.',
  },
  wembley: {
    id: 'wembley',
    name: 'Wembley',
    region: 'Western Suburbs',
    nearestHospital: 'Sir Charles Gairdner Hospital',
    description: 'Private home nursing care across Wembley, Jolimont, and Wembley Downs. Wound care, health assessments, and medication coordination.',
    surroundingSuburbs: 'Jolimont, Wembley Downs, and West Leederville',
    localHealthcareFocus: 'private home nursing, clinical wound care, and GP communications',
    localSpecificText: 'Our Wembley home nursing services are tailored for seniors and post-surgical patients. We maintain regular contact with general practitioners in Wembley and the Western Suburbs, helping coordinate clinical handovers from Sir Charles Gairdner Hospital. Wembley is actively covered, with nursing assessments scheduled within 24–48 hours.',
  },
  floreat: {
    id: 'floreat',
    name: 'Floreat',
    region: 'Western Suburbs',
    nearestHospital: 'Sir Charles Gairdner Hospital',
    description: 'Clinical nursing and home care in Floreat and Perry Lakes. Post-hospital support, companion care, and mobility supervision by registered nurses.',
    surroundingSuburbs: 'Wembley, Jolimont, and Churchlands',
    localHealthcareFocus: 'post-hospital recovery support, companion care, and mobility supervision',
    localSpecificText: 'Serving Floreat, City Beach, and Wembley Downs, our nurses actively cover Floreat and are ready to visit within 24–48 hours. We are familiar with the western suburbs and coordinate closely with Hollywood Private Hospital and Bethesda Hospital for post-hospital and chronic care support.',
  },
  'mount-pleasant': {
    id: 'mount-pleasant',
    name: 'Mount Pleasant',
    region: 'Perth South',
    nearestHospital: 'Fiona Stanley Hospital & St John of God Murdoch',
    description: 'Professional in-home registered nurse visits in Mount Pleasant and Brentwood. Medication management, wound dressings, and chronic condition monitoring.',
    surroundingSuburbs: 'Brentwood, Applecross, and Bateman',
    localHealthcareFocus: 'registered nurse home visits, medication administration, and chronic condition monitoring',
    localSpecificText: 'In Mount Pleasant and Brentwood, our Registered Nurses deliver dedicated in-home clinical care. We coordinate closely with St John of God Murdoch and Fiona Stanley Hospital to ensure patients have medication management and wound dressing schedules in place immediately after discharge. We can visit within 24–48 hours.',
  },
  leederville: {
    id: 'leederville',
    name: 'Leederville',
    region: 'Inner North',
    nearestHospital: 'Sir Charles Gairdner Hospital & Royal Perth Hospital',
    description: 'Clinical nursing services, post-operative support, and medication checks in Leederville, West Leederville, and North Perth.',
    surroundingSuburbs: 'West Leederville, North Perth, and Wembley',
    localHealthcareFocus: 'clinical nursing services, post-operative assessments, and injection support',
    localSpecificText: 'Covering Leederville, West Leederville, and North Perth, our nurses actively cover Leederville and are ready to visit within 24–48 hours. We coordinate with Sir Charles Gairdner Hospital and QEII Medical Centre for clients transitioning home after a hospital stay.',
  },
  'victoria-park': {
    id: 'victoria-park',
    name: 'Victoria Park',
    region: 'Inner East',
    nearestHospital: 'Royal Perth Hospital',
    description: 'In-home nursing services across Victoria Park, Lathlain, and East Victoria Park. Private nursing, wound care, and medication management by registered nurses.',
    surroundingSuburbs: 'Lathlain, East Victoria Park, and Carlisle',
    localHealthcareFocus: 'private nursing, sterile dressings, and medication reconciliation',
    localSpecificText: 'We service Victoria Park, East Victoria Park, and Carlisle with qualified Registered Nurses. Our team coordinates with Royal Perth Hospital to facilitate smooth transitions home, providing medication reconciliation and wound care reviews. We actively cover Victoria Park and are ready to visit within 24–48 hours.',
  },
  joondalup: {
    id: 'joondalup',
    name: 'Joondalup',
    region: 'Northern Suburbs',
    nearestHospital: 'Joondalup Health Campus',
    description: 'Professional in-home nursing care across Joondalup, Edgewater, and Currambine. Post-hospital recovery and clinical nursing from the registered nurse team at Care N Cure.',
    surroundingSuburbs: 'Edgewater, Currambine, and Connolly',
    localHealthcareFocus: 'home nursing care, post-surgical transition, and professional clinical oversight',
    localSpecificText: 'For our Joondalup and northern corridor clients, we coordinate closely with Joondalup Health Campus to manage safe discharges. Our Registered Nurses support you with sterile dressing changes, subcutaneous injections, and post-surgical recovery monitoring. We actively cover Joondalup and can arrange a visit within 24–48 hours.',
  },
  midland: {
    id: 'midland',
    name: 'Midland',
    region: 'Eastern Suburbs',
    nearestHospital: 'St John of God Midland Public & Private Hospital',
    description: 'Registered nurse home visits in Midland, Middle Swan, and Guildford. Wound care, medication management, and post-hospital recovery support in the eastern corridor.',
    surroundingSuburbs: 'Middle Swan, Guildford, and Bellevue',
    localHealthcareFocus: 'wound dressings, medication administration, and discharge coordination in the eastern corridor',
    localSpecificText: 'Our Midland nursing team coordinates directly with St John of God Midland Public & Private Hospital. We provide expert clinical care at home, focusing on wound management and medication safety to prevent readmissions. We cover Midland and the eastern suburbs, and can arrange an assessment within 24–48 hours.',
  },
  scarborough: {
    id: 'scarborough',
    name: 'Scarborough',
    region: 'Northern Suburbs',
    nearestHospital: 'Sir Charles Gairdner Hospital & Joondalup Health Campus',
    description: 'In-home registered nurse visits in Scarborough, Trigg, and Wembley Downs. Sterile wound care, post-surgical recovery, and dedicated clinical nursing.',
    surroundingSuburbs: 'Trigg, Doubleview, and Wembley Downs',
    localHealthcareFocus: 'post-operative wound care, mobility support, and medication checks',
    localSpecificText: 'Our Registered Nurses support Scarborough and coastal residents returning home after surgery or hospital stay. We liaise with SCGH and local health centers to ensure continuous clinical care. We can schedule a nursing assessment in Scarborough within 24–48 hours.',
  },
  sorrento: {
    id: 'sorrento',
    name: 'Sorrento',
    region: 'Northern Suburbs',
    nearestHospital: 'Joondalup Health Campus',
    description: 'Private nursing and registered nurse home visits across Sorrento, Hillarys, and Marmion. Medication support, wound care, and elderly health monitoring.',
    surroundingSuburbs: 'Hillarys, Marmion, and Duncraig',
    localHealthcareFocus: 'geriatric care management, subcutaneous injections, and post-hospital discharge support',
    localSpecificText: 'We support families across Sorrento and Hillarys with dedicated Registered Nurse visits. We coordinate care with Joondalup Health Campus for post-hospital recovery and ongoing clinical health management.',
  },
  duncraig: {
    id: 'duncraig',
    name: 'Duncraig',
    region: 'Northern Suburbs',
    nearestHospital: 'Joondalup Health Campus & SCGH',
    description: 'In-home clinical nursing care in Duncraig, Carine, and Greenwood. Professional registered nurse visits for wound management and chronic condition oversight.',
    surroundingSuburbs: 'Carine, Greenwood, and Padbury',
    localHealthcareFocus: 'chronic disease management, sterile dressings, and medication reconciliation',
    localSpecificText: 'Our Duncraig nursing care team delivers specialized clinical home visits. We accept referrals from local GPs and hospital discharge planners to support continuous health management in your own home.',
  },
  karrinyup: {
    id: 'karrinyup',
    name: 'Karrinyup',
    region: 'Northern Suburbs',
    nearestHospital: 'Sir Charles Gairdner Hospital',
    description: 'Registered nurse home care in Karrinyup, Gwelup, and Innaloo. Post-surgical care, wound dressing changes, and dedicated nurse coordination.',
    surroundingSuburbs: 'Gwelup, Innaloo, and Stirling',
    localHealthcareFocus: 'post-operative surgical recovery, health tracking, and medication safety',
    localSpecificText: 'Serving Karrinyup and surrounding areas, our Registered Nurses support clients returning home from facilities like Sir Charles Gairdner Hospital, providing professional wound dressing and medication oversight.',
  },
  como: {
    id: 'como',
    name: 'Como',
    region: 'Inner South',
    nearestHospital: 'Royal Perth Hospital & Fiona Stanley Hospital',
    description: 'In-home registered nurse visits in Como, Manning, and Salter Point. Private nursing, medication administration, and post-hospital support.',
    surroundingSuburbs: 'Manning, Salter Point, and South Perth',
    localHealthcareFocus: 'medication management, companion care, and clinical health tracking',
    localSpecificText: 'Our nursing team provides dedicated clinical home visits across Como and Manning. We accept referrals for clients discharged from facilities like Royal Perth Hospital or SJOG Murdoch to establish in-home nursing support within 24–48 hours.',
  },
  bicton: {
    id: 'bicton',
    name: 'Bicton',
    region: 'Fremantle Area',
    nearestHospital: 'Fiona Stanley Hospital & Fremantle Hospital',
    description: 'Clinical home nursing in Bicton, Palmyra, and East Fremantle. Sterile wound dressing, catheter management, and post-surgery care.',
    surroundingSuburbs: 'Palmyra, Attadale, and East Fremantle',
    localHealthcareFocus: 'sterile wound care, catheter management, and post-surgical recovery',
    localSpecificText: 'We support Bicton and Melville area residents with dedicated Registered Nurse care. For clients returning home after hospital procedures, we provide sterile wound dressings and medication safety support at home.',
  },
  'east-fremantle': {
    id: 'east-fremantle',
    name: 'East Fremantle',
    region: 'Fremantle Area',
    nearestHospital: 'Fiona Stanley Hospital & Fremantle Hospital',
    description: 'Private nursing and post-hospital care in East Fremantle and Bicton. Dedicated registered nurse coordinator for every client.',
    surroundingSuburbs: 'Fremantle, Bicton, and Palmyra',
    localHealthcareFocus: 'post-hospital recovery, clinical health monitoring, and GP coordination',
    localSpecificText: 'Our Registered Nurses provide in-home clinical care across East Fremantle. We liaise with your treating GP and specialists to provide structured post-discharge nursing recovery.',
  },
  'shenton-park': {
    id: 'shenton-park',
    name: 'Shenton Park',
    region: 'Western Suburbs',
    nearestHospital: 'Sir Charles Gairdner Hospital & Hollywood Private',
    description: 'Registered nurse home visits in Shenton Park, Daglish, and Subiaco. Complex wound management, medication supervision, and clinical assessments.',
    surroundingSuburbs: 'Daglish, Subiaco, and Jolimont',
    localHealthcareFocus: 'complex wound care, post-surgical recovery, and medication management',
    localSpecificText: 'Located in proximity to the QEII Medical Centre precinct, our nursing team accepts referrals for post-operative nursing care following procedures at local health facilities.',
  },
  dalkeith: {
    id: 'dalkeith',
    name: 'Dalkeith',
    region: 'Western Suburbs',
    nearestHospital: 'Sir Charles Gairdner Hospital & Hollywood Private',
    description: 'In-home private nursing care in Dalkeith, Nedlands, and Claremont. Registered nurses providing high-touch clinical care and chronic disease support.',
    surroundingSuburbs: 'Nedlands, Claremont, and Crawley',
    localHealthcareFocus: 'private clinical nursing, dedicated nurse coordination, and wound management',
    localSpecificText: 'Our Dalkeith private nursing services offer personalized, clinical home care. We communicate with your treating doctors to provide sterile wound dressings and health assessments at home.',
  },
  'city-beach': {
    id: 'city-beach',
    name: 'City Beach',
    region: 'Western Suburbs',
    nearestHospital: 'Sir Charles Gairdner Hospital',
    description: 'In-home registered nurse visits in City Beach and Floreat. Post-surgical recovery, medication checks, and dedicated clinical care.',
    surroundingSuburbs: 'Floreat, Wembley Downs, and Scarborough',
    localHealthcareFocus: 'post-surgical rehabilitation, vital sign tracking, and mobility support',
    localSpecificText: 'We support City Beach residents with professional in-home nursing visits. Our Registered Nurses work alongside your treating GP to support comprehensive post-hospital recovery and care.',
  },
  harrisdale: {
    id: 'harrisdale',
    name: 'Harrisdale',
    region: 'Perth South-East',
    nearestHospital: 'Armadale Health Service & Fiona Stanley Hospital',
    description: 'Care N Cure is proudly based in Harrisdale at 15 Rockefeller Way. We provide rapid in-home registered nurse visits, complex wound care, medication management, and aged care nursing across Harrisdale, Piara Waters, and Southern River.',
    surroundingSuburbs: 'Piara Waters, Southern River, and Canning Vale',
    localHealthcareFocus: 'dedicated nurse coordination, elderly home care, sterile wound management, and rapid intake assessments',
    localSpecificText: 'Harrisdale is Care N Cure\'s home base. Located right here on Rockefeller Way, our Registered Nurses provide immediate local availability with priority 24-hour intake response, zero travel charges, and continuous, familiar clinical care for Harrisdale families.',
  },
  byford: {
    id: 'byford',
    name: 'Byford',
    region: 'Perth South-East',
    nearestHospital: 'Armadale Health Service',
    description: 'In-home clinical nursing and aged care in Byford and the Serpentine-Jarrahdale region. Professional registered nurse visits for wound care, post-hospital recovery, and Home Care Packages.',
    surroundingSuburbs: 'Armadale, Cardup, and Darling Downs',
    localHealthcareFocus: 'in-home aged care nursing, post-hospital recovery, chronic condition monitoring, and medication management',
    localSpecificText: 'Byford is one of Perth\'s fastest-growing communities, and local families deserve high-quality clinical nursing without traveling to distant clinics. Care N Cure provides qualified Registered Nurse visits directly to Byford homes with zero travel surcharge, coordinating closely with Armadale Health Service and local GPs.',
  },
  'piara-waters': {
    id: 'piara-waters',
    name: 'Piara Waters',
    region: 'Perth South-East',
    nearestHospital: 'Fiona Stanley Hospital & Armadale Health Service',
    description: 'Professional in-home registered nurse visits across Piara Waters and Harrisdale. Clinical wound dressing, elderly care coordination, and post-discharge recovery.',
    surroundingSuburbs: 'Harrisdale, Southern River, and Cockburn Central',
    localHealthcareFocus: 'sterile wound care, medication reconciliation, elderly support, and vital sign monitoring',
    localSpecificText: 'Minutes from our Harrisdale headquarters, Piara Waters clients receive rapid clinical assessment and dedicated Registered Nurse coordination. Whether recovering from surgery or needing ongoing elderly care at home, we deliver trusted 1-on-1 nursing.',
  },
  thornlie: {
    id: 'thornlie',
    name: 'Thornlie',
    region: 'Perth South-East',
    nearestHospital: 'Armadale Health Service & Fiona Stanley Hospital',
    description: 'Providing dedicated in-home registered nurse visits and community aged care across Thornlie, Langford, and Canning Vale. Clinical wound care, medication oversight, and dedicated nurse coordination.',
    surroundingSuburbs: 'Langford, Canning Vale, and Gosnells',
    localHealthcareFocus: 'community nursing care, elderly home care, post-surgical dressing changes, and chronic condition management',
    localSpecificText: 'Thornlie residents are just minutes from our primary South-East Perth nursing team. We work closely with local medical centres along Spencer Road and Thornlie Square, as well as Armadale Health Service. Whether your loved one needs sterile wound management, daily medication checks, or Home Care Package coordination, we provide registered nurse visits with zero travel surcharges.',
  },
}

// Generate static params for all suburbs
export function generateStaticParams() {
  return Object.keys(suburbsMap).map((suburb) => ({
    suburb,
  }))
}

// Resolve metadata dynamically
export async function generateMetadata({ params }: { params: Promise<{ suburb: string }> }): Promise<Metadata> {
  const { suburb } = await params
  const data = suburbsMap[suburb]
  if (!data) return {}

  // Build a concise surrounding-suburbs string (max 2 suburbs)
  const nearbyShort = data.surroundingSuburbs.split(',').slice(0, 2).join(' &')

  return {
    title: {
      absolute:
        suburb === 'armadale'
          ? 'Armadale Home Care & Community Nursing | Care N Cure Perth'
          : `${data.name} Home Care & Community Nursing | Care N Cure Perth`,
    },
    description:
      suburb === 'armadale'
        ? 'In-home nursing and aged-care support in Armadale and nearby south-east Perth suburbs, subject to availability. Speak with a registered nurse.'
        : `In-home nursing & aged care in ${data.name} (${data.region}). Sterile wound care, medication management & post-hospital recovery by AHPRA registered nurses. Call 1300 919 663.`,
    alternates: { canonical: `https://carencure.com.au/locations/${suburb}` },
    openGraph: {
      title:
        suburb === 'armadale'
          ? 'Armadale Home Care & Community Nursing | Care N Cure Perth'
          : `${data.name} Home Care & Community Nursing | Care N Cure Perth`,
      description:
        suburb === 'armadale'
          ? 'In-home nursing and aged-care support in Armadale and nearby south-east Perth suburbs, subject to availability. Speak with a registered nurse.'
          : `In-home nursing & aged care in ${data.name} (${data.region}). Sterile wound care, medication management & post-hospital recovery by AHPRA registered nurses. Call 1300 919 663.`,
      url: `https://carencure.com.au/locations/${suburb}`,
    },
  }
}

export default async function SuburbPage({ params }: { params: Promise<{ suburb: string }> }) {
  const { suburb } = await params
  const data = suburbsMap[suburb]
  if (!data) {
    notFound()
  }

  const faqs = [
    {
      question: `Do you provide in-home nursing services across ${data.name} and nearby suburbs?`,
      answer:
        suburb === 'armadale'
          ? 'Yes. Care N Cure registered nurses travel directly to homes across Armadale, Kelmscott, Seville Grove, Mount Nasura, Mount Richon, Roleystone, Bedfordale, Wungong, and Champion Lakes. Initial clinical assessments are arranged within 24–48 hours of enquiry.'
          : `Yes. Care N Cure registered nurses travel to ${data.name} and the surrounding area. Call us on 1300 919 663 to confirm availability and book an initial assessment.`,
    },
    {
      question: 'Are your nurses fully registered with AHPRA?',
      answer: 'Yes. All nurses at Care N Cure are registered with the Australian Health Practitioner Regulation Agency (AHPRA) and hold current registration as Registered Nurses. Our founder Jinu has 10+ years of clinical experience.',
    },
    {
      question: `How quickly can a nurse visit me in ${data.name}?`,
      answer: `We arrange an initial clinical assessment within 24–48 hours of enquiry for clients in ${data.name}. For urgent post-discharge situations, call us directly on 1300 919 663 and we will prioritise your intake.`,
    },
    {
      question: 'What does in-home nursing cost?',
      answer: 'Standard weekday clinical visits typically range from $110 to $160 per hour, depending on care complexity. Private nursing is available as a private-pay service. We also support clients with Home Care Packages (HCP Levels 1-4), Support at Home, NDIS, and DVA funding. Call us to discuss your situation.',
    },
  ]

  return (
    <>
      <SuburbPageSchema suburb={data.name} url={`/locations/${suburb}`} />
      <FAQPageSchema faqs={faqs} />

      <PageHeader
        title={
          suburb === 'armadale'
            ? 'Home Nursing and Community Care in Armadale'
            : `${data.name} Home Care & Community Nursing`
        }
        subtitle={`Registered nurses providing in-home clinical care across ${data.name} and surrounding Perth suburbs.`}
        breadcrumbItems={[
          { name: 'Locations', href: '/locations' },
          { name: data.name, href: `/locations/${suburb}` },
        ]}
        label={data.region}
      />

      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Main Content */}
            <div className="lg:col-span-7 space-y-8">

              <div>
                <p className="section-label mb-2">Serving {data.region}</p>
                <h2 className="text-navy text-3xl font-bold">
                  {suburb === 'armadale'
                    ? 'Home Nursing and Community Care in Armadale'
                    : `Clinical Home Nursing & Community Care in ${data.name}, Perth WA`}
                </h2>
                <div className="section-divider" />
                <p className="text-body text-lg leading-relaxed mt-4">
                  {data.description}
                </p>
                <p className="text-body leading-relaxed mt-3">
                  {getLocalText(data)}
                </p>
                {data.localSpecificText && (
                  <p className="text-body leading-relaxed mt-3 font-semibold text-navy bg-teal-50/50 p-4 rounded-xl border border-teal-100/50">
                    {data.localSpecificText}
                  </p>
                )}
                <p className="text-body leading-relaxed mt-3">
                  Care N Cure is a Perth-based nursing practice founded by Jinu — a registered nurse with over a decade of hospital and community nursing experience. We provide in-home nursing visits across {data.name} and all adjacent Perth suburbs.
                </p>

                {suburb === 'armadale' && (
                  <div className="space-y-6 pt-6 border-t border-border mt-6">
                    <h2 className="text-navy text-2xl font-bold">In-Home Clinical Nursing for Armadale & South-East Perth Families</h2>
                    <p className="text-body leading-relaxed">
                      Finding qualified, consistent clinical care at home can be challenging for families navigating post-operative recovery or caring for aging parents. In Armadale and neighboring communities, Care N Cure provides a direct alternative to institutional aged care facilities or rotating agency rosters. Every client is paired with a dedicated AHPRA-Registered Nurse Coordinator who gets to know your medical background, coordinates with your doctors, and visits on a predictable schedule.
                    </p>

                    <h3 className="text-navy text-xl font-bold">Local Service Coverage in Armadale & South-East Perth</h3>
                    <p className="text-body leading-relaxed text-sm">
                      Operating from our clinical base in Harrisdale, our nursing team regularly visits clients across the City of Armadale. We actively service <strong>Armadale, Kelmscott, Seville Grove, Mount Nasura, Mount Richon, Roleystone, Bedfordale, Wungong, and Champion Lakes</strong>. Clinical visit availability, response scheduling, and any applicable travel terms are confirmed transparently during your initial consultation.
                    </p>

                    <h3 className="text-navy text-xl font-bold">Post-Hospital Recovery Support: Returning Home to Armadale</h3>
                    <p className="text-body leading-relaxed text-sm">
                      For Armadale residents returning home after hospital care — including from facilities such as <strong>Armadale Health Service (Armadale Kelmscott Memorial Hospital)</strong> or <strong>Fiona Stanley Hospital</strong> — safe recovery depends on continuous care at home. Care N Cure accepts referrals from hospital discharge planners, doctors, GPs and allied-health professionals across Perth, subject to client suitability, consent and service availability. With client and family consent, our Registered Nurses review discharge summaries, verify medications with your doctor, and initiate sterile dressing routines within 24 to 48 hours of return.
                    </p>
                    <p className="text-xs text-amber-900 bg-amber-50 p-3 rounded-lg border border-amber-200/80 leading-relaxed">
                      <strong>Medical Notice:</strong> We are not an emergency service. For urgent or life-threatening concerns, call <strong>000</strong>.
                    </p>

                    <h3 className="text-navy text-xl font-bold">Common In-Home Clinical Needs in Armadale</h3>
                    <ul className="space-y-2.5 text-body text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-accent font-bold">•</span>
                        <span><strong>Complex Wound Management:</strong> Aseptic dressings for surgical incisions, diabetic foot ulcers, pressure injuries, and skin tears.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-accent font-bold">•</span>
                        <span><strong>Medication Safety & Injections:</strong> Subcutaneous injections (e.g. Clexane, insulin), medication reconciliation against hospital lists, and Webster-pak supervision.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-accent font-bold">•</span>
                        <span><strong>Chronic Disease Monitoring:</strong> Routine clinical tracking of blood pressure, blood glucose, oxygen saturation, and respiratory stability for elderly parents.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-accent font-bold">•</span>
                        <span><strong>Catheter & Continence Support:</strong> Routine clinical care and management for indwelling and supra-pubic catheters by registered clinicians.</span>
                      </li>
                    </ul>

                    <h3 className="text-navy text-xl font-bold">Flexible Funding: Private-Pay, Home Care Packages & NDIS</h3>
                    <p className="text-body leading-relaxed text-sm">
                      Clinical nursing in Armadale is available through private fee-for-service with transparent hourly rates ($110–$160/hr weekdays). We also support clients with active <strong>Home Care Packages (HCP Levels 1 to 4)</strong> and <strong>Support at Home</strong> via self-managed and provider partnerships (including Trilogy Care), as well as <strong>NDIS</strong> self-managed and plan-managed participants.
                    </p>

                    <h3 className="text-navy text-xl font-bold">What Happens on Your First Armadale Home Visit?</h3>
                    <p className="text-body leading-relaxed text-sm">
                      On our initial visit, your dedicated Nurse Coordinator conducts a comprehensive clinical intake: reviewing current vitals, evaluating mobility and home safety, assessing any open wounds, and reconciling all medications. Together with you and your family, we develop an individualised care plan that integrates with your treating Armadale GP or specialist.
                    </p>

                    <div className="p-5 bg-teal-50/80 rounded-xl border border-teal-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <p className="text-navy font-bold text-base">Need in-home nursing in Armadale?</p>
                        <p className="text-body text-xs mt-0.5">Speak directly with a Perth registered nurse about scheduling an initial clinical assessment.</p>
                      </div>
                      <a href="tel:1300919663" className="btn-phone text-xs px-5 py-2.5 shrink-0">
                        Call 1300 919 663
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <h3 className="text-navy text-2xl font-bold">Why choose us in {data.name}?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-text flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-navy font-bold text-sm">Registered Nurses Only</h4>
                      <p className="text-body text-xs mt-1">We do not use support workers or assistants for clinical tasks.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-text flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-navy font-bold text-sm">Same Nurse, Every Visit</h4>
                      <p className="text-body text-xs mt-1">Building deep, consistent clinical relationships with zero roster surprises.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-text flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-navy font-bold text-sm">Direct GP Updates</h4>
                      <p className="text-body text-xs mt-1">Handovers sent to doctors and surgeons after critical recoveries.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-text flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-navy font-bold text-sm">Zero Fabricated Data</h4>
                      <p className="text-body text-xs mt-1">Clear, professional communication, transparent pricing, and real records.</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Local Hospital Continuity Box */}
              <div className="bg-surface p-6 rounded-2xl border border-border space-y-4">
                <h3 className="text-navy text-lg font-bold flex items-center gap-2">
                  <Stethoscope className="w-5 h-5 text-teal-text" />
                  Seamless hospital discharge
                </h3>
                <p className="text-body text-xs leading-relaxed">
                  If your loved one is returning to <strong>{data.name}</strong> from <strong>{data.nearestHospital}</strong>, early professional planning is critical. We coordinate directly with local ward teams and discharge coordinators, performing immediate medication checks and setting up dressing routines to prevent costly readmissions.
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: 'var(--teal-text)' }}>
                  <ShieldCheck className="w-4 h-4" />
                  Supporting Sir Charles Gairdner, Fiona Stanley, Royal Perth, and SJOG clients.
                </div>
              </div>

              {/* Specific Services Offered Checklist */}
              <div className="space-y-4">
                <h3 className="text-navy text-xl font-bold">Services We Deliver in {data.name}:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-body">
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-teal-text flex-shrink-0" />
                    <Link href="/post-hospital-care" className="hover:text-teal-text transition-colors font-medium">
                      Post-Hospital Recovery Care
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-teal-text flex-shrink-0" />
                    <Link href="/private-nursing" className="hover:text-teal-text transition-colors font-medium">
                      Private Nursing at Home
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-teal-text flex-shrink-0" />
                    <Link href="/registered-nurses-clinical-care-services" className="hover:text-teal-text transition-colors font-medium">
                      Registered Nurses Clinical care Services
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-teal-text flex-shrink-0" />
                    <Link href="/wound-care" className="hover:text-teal-text transition-colors font-medium">
                      Sterile Wound Dressings
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-teal-text flex-shrink-0" />
                    <Link href="/medication-management" className="hover:text-teal-text transition-colors font-medium">
                      Injections & Vitals Monitoring
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-teal-text flex-shrink-0" />
                    <Link href="/medication-management" className="hover:text-teal-text transition-colors font-medium">
                      Medication Management
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-teal-text flex-shrink-0" />
                    <Link href="/mobility-support" className="hover:text-teal-text transition-colors font-medium">
                      Mobility & Rehab Exercises
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-teal-text flex-shrink-0" />
                    <Link href="/companion-care" className="hover:text-teal-text transition-colors font-medium">
                      Companion & Respite Care
                    </Link>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column Form */}
            <div className="lg:col-span-5 space-y-6">
              <div className="sticky top-24 space-y-6">
                <ContactForm
                  title={`Enquire in ${data.name}`}
                  subtitle={`Provide your details below. Our Registered Nurse team will contact you to discuss clinical nursing support in ${data.name}.`}
                  defaultSuburb={data.name}
                />
                <CtaUncertaintyReducer />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Suburb FAQ Section */}
      <section className="section-py bg-surface border-t border-border">
        <div className="section-container max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="text-navy font-bold">Frequently Asked Questions</h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="card-base p-6 divide-y divide-border">
            {faqs.map((faq, index) => (
              <div key={index} className="py-4 first:pt-0 last:pb-0">
                <h4 className="text-navy font-bold mb-2">{faq.question}</h4>
                <p className="text-body text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby/Related Suburbs Internal Linking Section */}
      {(() => {
        let related = Object.values(suburbsMap).filter((s) => s.id !== data.id && s.region === data.region)
        if (related.length < 5) {
          const others = Object.values(suburbsMap).filter((s) => s.id !== data.id && s.region !== data.region)
          related = [...related, ...others].slice(0, 5)
        } else {
          related = related.slice(0, 5)
        }

        return (
          <section className="section-py bg-white border-t border-border">
            <div className="section-container">
              <div className="text-center mb-8">
                <h2 className="text-navy text-2xl font-bold">Other Suburbs We Service Near {data.name}</h2>
                <div className="section-divider mx-auto" />
                <p className="text-body text-sm max-w-xl mx-auto mt-2">
                  We provide registered nurse home care visits with zero travel charges across the entire Perth metro region, including these nearby suburbs:
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
                {related.map((s) => (
                  <Link
                    key={s.id}
                    href={`/locations/${s.id}`}
                    className="flex flex-col p-4 rounded-xl border border-border bg-surface hover:border-teal-accent hover:shadow-xs transition-all text-center group"
                  >
                    <span className="text-navy font-bold text-sm group-hover:text-teal-text transition-colors">
                      {s.name}
                    </span>
                    <span className="text-muted-brand text-[10px] uppercase font-bold mt-1">
                      {s.region}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )
      })()}

      <CTASection
        title={`Looking for a private registered nurse in ${data.name}?`}
        description={`Call our founder Jinu directly. Speak directly with a registered nurse to design a recovery or care plan today.`}
        secondaryLink={{ text: 'Call Us Now', href: '/contact', isPhone: false }}
      />
    </>
  )
}