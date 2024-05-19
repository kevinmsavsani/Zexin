import {
  CheckIcon,
  ClockIcon,
  LinkIcon,
  PencilSquareIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const careerList = [
  "Enriching lives to create a healthier and happier world",
  "Upholding high ethical standards",
  "Consistently delivering high performance",
  "Continuous innovation and learning",
  "Working collaboratively and encouraging cross-cultural diversity",
  "Collectively celebrating achievements and milestones",
];

export default function Index() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Work with us
            </h2>
          </div>
        </div>
      </div>
      <div className="p-8 text-gray-600 max-w-2xl lg:mx-0 lg:max-w-none">
        At Zexin, we strongly believe in manpower which continuously fuels our
        growth. It prides itself on its ability to nurture talent and provide
        them with the challenges, expanded roles and empowerment they need to
        hone their skills at every stage of their careers and you get the chance
        to work with a team and organization that who believes in it.
      </div>
      <ul className="px-8">
        {careerList.map((val, index) => (
          <li key={index} className="flex items-center">
            <CheckIcon
              className="h-2 w-2 text-teal-600 mr-2 rounded border"
              aria-hidden="true"
            />
            <span className="text-gray-600">{val}</span>
          </li>
        ))}
      </ul>
      <div className="flex divide-x m-8 p-8 border boder-dashed text-gray-600 rounded-lg">
        <div>
          <img className="h-24" src="zexin.jpg" alt="" />
          <p className="py-12">
            The Company was established in the year 2023. It's a reputed &
            established name in Indian pharmaceutical market with the
            diversified product portfolio.
          </p>
          <p>Follow us on social media channels to stay updated with the latest trends in the pharmaceutical industry.</p>
        </div>     
        <div className="p-4 px-8 w-[50%]">
          <h1 className="font-bold p-4">Corporate Office</h1>
          <div className="bg-gray-100 px-12 py-2 rounded-lg shadow-md">
            <p className="mb-4 flex items-center">
              96/1, Purwavali, Ganeshpur, Roorkee, Haridwar-247667, Uttarakhand.
            </p>
            <div className="mb-4 flex items-center">
              <ClockIcon
                className="h-6 w-6 text-teal-600 mr-2"
                aria-hidden="true"
              />
              <span className="text-gray-900">Mon-Sat: 10am - 6pm</span>
            </div>
            <div className="mb-4 flex items-center">
              <PhoneIcon
                className="h-6 w-6 text-teal-600 mr-2"
                aria-hidden="true"
              />
              <span className="text-gray-900">7060126221</span>
            </div>
            <div className="mb-4 flex items-center">
              <PencilSquareIcon
                className="h-6 w-6 text-teal-600 mr-2"
                aria-hidden="true"
              />
              <a
                href="http://www.bestochem.com"
                className="text-teal-600 hover:underline"
              >
                connect@zexinpharma.in
              </a>
            </div>
            <div className="flex items-center">
              <LinkIcon
                className="h-6 w-6 text-teal-600 mr-2"
                aria-hidden="true"
              />
              <a
                href="http://www.bestochem.com"
                className="text-teal-600 hover:underline"
              >
                www.zexinpharma.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
