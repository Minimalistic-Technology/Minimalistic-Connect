// 'use client';

// import React from 'react';
// import Image from "next/image";

// const plans = [
//   {
//     name: 'Starting at',
//     price: '$300',
//     features: [
//       'Teaam members starting at 25',
//       'Groups starting at 10',
//       'Users starting at 500',
//       'Metrics starting at 30',
//       'Email/SMS/webhook notifications',
//       'Custom CSS/HTML/JS',
//       'Manage API',
//       'Team member SSO (with Atlassian Guard)',
//       'Component subscriptions',
//     ],
//   },
// ];

// const AudienceSpecificPage = () => {
//   return (
//     <div className="bg-gray-900 text-gray-300 py-16 px-4">
//       {/* Right Side Part: Different views for different sets of users */}
//       <section className="bg-gray-900 text-gray-300 py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             {/* Left Text */}
//             <div className="text-left">
//               <h3 className="text-xl font-semibold mb-4">Different views for different sets of users</h3>
//               <p className="mb-4">
//                 Provide tailored status updates for different user groups. With audience-specific pages, you can create distinct views for enterprise clients, partners, or internal teams, ensuring each group sees only the information relevant to them.
//               </p>
//               <a href="#" className="text-blue-400 hover:underline text-sm font-medium">
//                 Learn more →
//               </a>
//             </div>

//             {/* Right Image */}
//             <div className="flex justify-center">
//               <Image
//                 src="/images/AudienceSpecificPage.svg"
//                 alt="Different views for different sets of users"
//                 width={500}
//                 height={350}
//                 className="rounded-lg shadow-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Existing Left Side Part: Pricing Card Section */}
//       <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
//         {plans.map((plan, idx) => (
//           <div key={idx} className="bg-gray-900 rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
//             <p className="text-3xl font-bold mb-4">{plan.price} <span className="text-sm font-normal">/month</span></p>
//             <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-6">
//               Get started today
//             </button>
//             <ul className="text-sm space-y-2">
//               {plan.features.map((feature, i) => (
//                 <li key={i} className="flex items-start gap-2">
//                   <span className="text-green-400">✔</span>
//                   <span>{feature}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AudienceSpecificPage;