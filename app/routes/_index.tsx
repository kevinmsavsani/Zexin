import type { MetaFunction } from "@remix-run/node";
import Card from "~/components/cards";
import Carousel from "~/components/carousel";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const slides = [
  {
    image: "tablet-background.png",
    title: "Tablets",
    description:
      "Pharmaceutical substance used in the diagnosis, treatment, or prevention of disease and for restoring, correcting, or modifying organic functions.",
    buttonText: "Read More",
  },
  {
    image: "cream-background.png",
    title: "Cream",
    description:
      "Topical preparation used for the treatment of various skin conditions, providing relief and promoting healing.",
    buttonText: "Read More",
  },
  {
    image: "soap-background.png",
    title: "Soap",
    description:
      "Cleaning agent used for personal hygiene, helping to remove dirt, sweat, and microorganisms from the skin.",
    buttonText: "Read More",
  },
  {
    image: "syrup-background.png",
    title: "Syrup",
    description:
      "Oral solution used in the treatment of cough, cold, and other respiratory conditions, providing soothing relief.",
    buttonText: "Read More",
  },
  {
    image: "capsule-background.png",
    title: "Capsules",
    description:
      "Solid dosage form used for the oral administration of medication, designed to ensure proper dosage and absorption.",
    buttonText: "Read More",
  },
];

const cards = [
  {
    icon: (
      <img
        src="training-icon.png"
        alt="Training & Development"
        className="w-36 h-36"
      />
    ),
    title: "Training & Development",
    description:
      "We Are Committed to People and Organizations Achieve Performance with Fulfillment",
  },
  {
    icon: (
      <img
        src="education-icon.png"
        alt="Medical & Patient Education"
        className="w-36 h-36"
      />
    ),
    title: "Medical & Patient Education",
    description:
      "Patient education can be defined as the process of influencing patient behavior.",
  },
  {
    icon: (
      <img
        src="testimonial-icon.png"
        alt="Employee Testimonials"
        className="w-36 h-36"
      />
    ),
    title: "Employee Testimonials",
    description:
      "An employee testimonial is an official statement from an employee about company.",
  },
];

export default function Index() {
  return (
    <div>
      <Carousel slides={slides} />
      <div className="bg-blue-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Focused on Excellence</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {cards.map((card, index) => (
              <Card
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
