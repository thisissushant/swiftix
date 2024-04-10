import React from "react";
import Image from "next/image";

// Team member data
const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww",
  },
  {
    name: "Bob Johnson",
    role: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww",
  },
];

// Company history
const companyHistory = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula justo eu diam pretium, at accumsan eros fringilla. Donec ut justo vel est faucibus fermentum. Sed vel tellus id ipsum commodo ullamcorper.`;

// Timeline data
const milestones = [
  {
    year: "2010",
    description: "Company founded",
  },
  {
    year: "2012",
    description: "First product launched",
  },
  {
    year: "2015",
    description: "Expanded to international markets",
  },
  {
    year: "2018",
    description: "Introduced new product line",
  },
  {
    year: "2021",
    description: "Reached 1 million customers",
  },
];
const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-12">
        <h1 className="text-3xl font-bold mb-8">About Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-pink-100 rounded-lg shadow-md overflow-hidden"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={500}
                    height={300}
                    className="w-full h-auto"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-6">{companyHistory}</p>

            <h2 className="text-2xl font-bold mb-4">Key Milestones</h2>
            <div className="border-l-2 border-gray-400 pl-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-lg font-bold">{milestone.year}</h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
