import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import AraamiImg from '../assets/Araami.png';
import MadhavenergyImg from '../assets/madhavenergy.png';
import SparowtechImg from '../assets/Sparowtech.png';
import HeerImg from '../assets/Heer.png';
import NamotrustImg from '../assets/Namotrust.png';
import BioImg from '../assets/Bio.png';
import EECNRImg from '../assets/E&E Construction & Remodel.png';
import ElajxImg from '../assets/elajx.png';
import OxygenAbsorbersImg from '../assets/Oxygen Absorbers.png';
import PharmaDesiccantImg from '../assets/PharmaDesiccant.png';
import PhotofilmsImg from '../assets/Photofilms.png';
import VrixElectricImg from '../assets/Vrix Electric India.png';
import BotanicalPlasticsImg from '../assets/Botanicalplastics.png';
import JaypadImg from '../assets/Jaypad.png';
import ContilImg from '../assets/Contil From The Earth.png';
import NitricAcidImg from '../assets/Nitric Acid.png';
import TechRecycleImg from '../assets/TechRecycle.png';
import BeautyAcademyImg from '../assets/Beauty Academy .png';
import SachiInteriorImg from '../assets/Sachi  Interior.png';
import DesiccantPakImg from '../assets/Desiccant Pak.png';
import GayatriAgriImg from '../assets/Gayarti Agri.png';
import AloisImg from '../assets/ALOIS Solutions.png';
import JalaramLabelsImg from '../assets/Jalaram labels India.png';
import KaljiDiagnosisImg from '../assets/Kalji Diagnosis Centre.png';
import SatashaPharmaImg from '../assets/Satasha Pharmaceuticals.png';

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const projects = [
    {
      title: 'Sparowtech Solutions',
      description: 'Modern and responsive SparowTech website highlighting branding, IT & digital marketing services with a sleek contact form integration',
      image: SparowtechImg,
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      link: 'https://www.sparowtech.com/',
      featured: false
    },
    {
      title: 'Araami-Ecommerce',
      description: 'Built a WordPress e-commerce website with admin dashboard, secure payments, and product management features.',
      image: AraamiImg,
      tags: ['WordPress', 'PHP', 'JavaScript'],
      link: 'https://araami.com/',
      featured: true
    },
    {
      title: 'Madhav Energy',
      description: 'Clean and modern solar energy site highlighting EPC services, a detailed project gallery, and PHPMailer-integrated inquiry form..',
      image: MadhavenergyImg, // <-- Use the imported variable
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      link: 'https://www.madhavenergy.com/',
      featured: true
    },

    {
      title: 'Heertel Services',
      description: 'Responsive and industry-focused websites crafted for solar EPC, digital marketing, and telecom solutions integrating service highlights,project showcases,& PHPMailer-based contact forms.',
      image: HeerImg,
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      link: 'https://heerteleservices.com/',
      featured: false
    },
    {
      title: 'Namo Trust',
      description: 'Namo Trust is a charitable organization empowering underserved and remote communities through health camps, environmental outreach, education, and humanitarian aid since 2019.',
      image: NamotrustImg,
      tags: ['WordPress', 'PHP'],
      link: 'https://namotrust.org/',
      featured: false
    },
    {
      title: 'Bioelixer Renewables',
      description: 'Bioelixer Renewables is a Ghaziabad based clean energy company advancing sustainability through biofuels (ethanol), compressed biogas (CBG), and solar energy solutions for communities worldwide.',
      image: BioImg,
      tags: ['WordPress', 'PHP'],
      link: 'https://bioelixerrenewables.com/',
      featured: false
    },
    {
      title: 'E&E Construction & Remodel',
      description: 'E & E CNR is a consultancy and training organization offering expert solutions in electrical safety, energy audits, and renewable compliance services.',
      image: EECNRImg,
      tags: ['WordPress', 'PHP'],
      link: 'https://eandecnr.com/',
      featured: false
    },
    {
      title: 'Elajx Learning management system (LMS)',
      description: 'Elajx is a wellness platform offering naturopathy, Ayurveda, and holistic health programs with personalized treatments and online consultations.',
      image: ElajxImg,
      tags: ['WordPress', 'PHP'],
      link: 'https://elajx.com/',
      featured: false
    },
    {
      title: 'Oxygen Absorbers',
      description: 'Oxygen-Absorbers.com is a U.S.-based supplier of oxygen and desiccant packets—such as their "OxySorb" line—designed to extend shelf life and maintain freshness in food packaging by safely removing oxygen. ',
      image: OxygenAbsorbersImg,
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      link: 'https://oxygen-absorbers.com/',
      featured: false
    },
    {
      title: 'PharmaDesiccant',
      description: 'Pharma Desiccants offers USFDA-approved packaging to protect medicines, nutraceuticals, and diagnostics.',
      image: PharmaDesiccantImg,
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      link: 'https://www.pharmadesiccants.com/',
      featured: false
    },
    {
      title: 'Photofilms',
      description: 'PhotoFilms is a Vadodara-based wedding photography studio that specializes in capturing romantic love stories with cinematic composition and heartfelt storytelling.',
      image: PhotofilmsImg,
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      link: 'https://photofilms.in/',
      featured: false
    },
    {
      title: 'Vrix Electric India',
      description: 'Vrix Electric delivers high-quality MCBs, RCCBs, and changeover devices with in-house manufacturing.',
      image: VrixElectricImg,
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      link: 'https://www.vrixelectric.com/',
      featured: false
    },
    {
      title: 'Botanical Plastics',
      description: 'Botanical Plastics provides sustainable solutions with eco-machinery, biodegradable materials, and turnkey green manufacturing services',
      image: BotanicalPlasticsImg,
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      link: 'https://botanicalplastics.com/',
      featured: false
    },
    {
      title: 'Jaypad Foundation',
      description: 'Jaypad Foundation is a Vadodara-based non-profit organization launched in December 2022, committed to serving communities through compassion-driven social initiatives and community support.',
      image: JaypadImg,
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      link: 'https://jaypadfoundation.org/',
      featured: false
    },
    {
      title: 'Contil From The Earth',
      description: 'Contil India Ltd. (Contil Group) is a trusted exporter and processor of premium pulses, spices, flour, and other grocery products, delivering high-quality food items globally. ',
      image: ContilImg,
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      link: 'https://contilgroup.com/',
      featured: false
    },
    {
      title: 'Acid Distributor (Static)',
      description: 'NitricAcid.in is a B2B platform providing high-quality nitric acid and chemical solutions for industrial applications across India.',
      image: NitricAcidImg,
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      link: 'https://www.nitricacid.in/',
      featured: false
    },
    {
      title: 'IT Asset recycling (Static)',
      description: 'TechRecycle offers certified IT asset disposition and reverse logistics services in Canada—focused on secure data destruction, asset management, and environmentally responsible electronics recycling.',
      image: TechRecycleImg,
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      link: 'https://techrecycle.com/',
      featured: false
    },
    {
      title: 'Interior Design Website (Dynamic)',
      description: 'GCSC Beauty Academy in Vadodara offers comprehensive professional training in beauty and salon services—including makeup, nails, mehndi, hairstyling, and salon management—designed to empower students with real-world skills.',
      image: BeautyAcademyImg,
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      link: 'https://gcscbeautyacademy.in/',
      featured: false
    },
    {
      title: 'Sachis Interior ConceptLearning',
      description: 'Sachi Parikh (via sachiparikh.in) is the portfolio site of a professional interior designer and space planner crafting bespoke residential and commercial environments.',
      image: SachiInteriorImg,
      tags: ['WordPress', 'JavaScript', 'PHP'],
      link: 'https://sachiparikh.in/',
      featured: false
    },
    {
      title: 'Desiccant Pak',
      description: 'Magnam India provides turnkey dairy and food processing solutions, including pasteurizers, homogenizers, and complete plants for ghee, paneer, curd, and ice cream.(Dynamic Website with Admin Panelhttps)',
      image: DesiccantPakImg,
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      link: 'https://www.magnam.in/',
      featured: false
    },
    {
      title: 'Pharmaceutical Packaging Tubes',
      description: 'Pharmaceutical Tubes supplies laminated and aluminum tubes—primarily for pharmaceuticals, cosmetics, and food packaging—offering customizable, high-quality solutions to meet industry needs.',
      image: PharmaDesiccantImg,
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      link: 'https://www.magnam.in/',
      featured: false
    },
    {
      title: 'Gayatri Agri',
      description: 'Gayatri Agri is an Indian agri-business specializing in manufacturing and processing high-quality Basmati rice and pulses, delivering hygienic food products with sustainable practices.(Signle page Website)',
      image: GayatriAgriImg,
      tags: ['WordPress', 'JavaScript', 'PHP'],
      link: 'https://gayatriagri.com/',
      featured: false
    },
    {
      title: 'ALOIS Solutions',
      description: 'Alois Solutions is a global talent and IT services provider delivering staffing, MSP support, payroll, and consulting solutions across the US, UK, India, Australia, and beyond.',
      image: AloisImg,
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      link: 'https://aloissolutions.com/',
      featured: false
    },
    {
      title: 'Jalaram labels India',
      description: 'Jalaram Labels is a Vadodara-based manufacturer and supplier of high-quality barcode ribbons, thermal labels, printed and self-adhesive labels, and barcode printers.',
      image: JalaramLabelsImg,
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      link: 'https://www.jalaramlabels.com/',
      featured: false
    },
    {
      title: 'Kalji Diagnosis Centre',
      description: 'Kalji Diagnosis Center (Vadodara) provides 24×7 advanced diagnostic imaging and intervention services—including MRI, CT scan, X-Ray, USG, 2D-3D Echo, and portable diagnostics with in-house pathology and ambulance support. ',
      image: KaljiDiagnosisImg,
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      link: 'https://kaljidiagnosiscenter.com/',
      featured: false
    },
    {
      title: 'Satasha Pharmaceuticals',
      description: 'Satasha Pharmaceuticals is a trusted pharmaceutical company committed to delivering quality and affordable GMP-compliant medicines worldwide',
      image: SatashaPharmaImg,
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      link: 'https://www.satashapharma.com/',
      featured: false
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  const handleProjectClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <section id="portfolio" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">My Work</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've worked on recently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleProjects.map((project, index) => (
            <Card
              key={index}
              className={`group shadow-card hover-scale border border-border/20 bg-card/80 backdrop-blur overflow-hidden cursor-pointer ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}

              onClick={() => handleProjectClick(project.link)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-primary/10 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="w-full justify-between group-hover:bg-primary group-hover:text-white transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProjectClick(project.link);
                  }}
                >
                  Launch Project
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg font-semibold hover-scale hover-target"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? 'Show Less' : 'View More Projects'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;