"use client";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaUserTie,
  FaUserAlt,
} from "react-icons/fa";

export default function Footer() {
  const team = [
    {
      name: "Syed Huzaifa Bin Hamid",
      github: "https://github.com/Shuzaifa12",
      linkedin: "https://www.linkedin.com/in/s-huzaifa/",
      email: "shuzaifa32@gmail.com",
      phone: "+92-317-1243983",
      gender: "male",
    },
    {
      name: "Syed Daniyal Ali",
      github: "https://github.com/daniyal2024",
      linkedin: "https://www.linkedin.com/in/daniyal-ali-808bba208/",
      email: "s.dani1966@gmail.com",
      phone: "+92-304-5335813",
      gender: "male",
    },
    {
      name: "Maimoona Masood",
      github: "https://github.com/Maimoonagit123",
      linkedin: "https://www.linkedin.com/in/maimoona-masood-b62350236/",
      email: "maimoonamasood18@gmail.com",
      phone: "+92-314-3280077",
      gender: "female",
    },
    {
      name: "Saqib Sheikh",
      github: "https://github.com/MuhammadSaqibSheikh",
      linkedin: "https://www.linkedin.com/in/saqib-sheikh-664893246/",
      email: "saqibsaqib526@gmail.com",
      phone: "+92-311-3040560",
      gender: "male",
    },
  ];

  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((person, idx) => (
          <div key={idx}>
            <h3 className="flex items-center text-lg font-semibold mb-4 space-x-2">
              {person.gender === "female" ? (
                <FaUserAlt size={24} color="#ec4899" />
              ) : (
                <FaUserTie size={24} color="#3b82f6" />
              )}
              <span>{person.name}</span>
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={person.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:underline"
                >
                  <FaGithub color="#fff" size={20} />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:underline"
                >
                  <FaLinkedin color="#0A66C2" size={20} />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={person.email}
                  className="flex items-center space-x-2 hover:underline"
                >
                  <FaEnvelope color="#ef4444" size={20} />
                  <span>{person.email.replace("mailto:", "")}</span>
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone color="#4ade80" size={20} />
                <span>{person.phone}</span>
              </li>
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} AI Agents Hackathon Team. All rights reserved.
      </div>
    </footer>
  );
}
