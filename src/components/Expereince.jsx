import React from "react";

const Expereince = () => {
  return (
    <div id="work" className="bg-gradient-to-r from-[#151b34]  to-[#030d35] flex flex-col justify-center items-center font-roboto ">
      <h1  className="bg-gradient-to-r from-pink-500 to-purple-600 font-bold text-5xl bg-clip-text text-transparent mt-28">EXPERIENCE</h1>
      <div className="container flex flex-col justify-center items-center mt-1">
        <div className="text-white bg-gradient-to-r from-[#2c3a74] to-[#030d35] p-10 m-2 w-[75%] flex items-center">
          <img className="h-20 pr-10"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROrefXq2iaMEyDW-EUR7Y-NJbJ4_QnXz3KJA&s"
            alt=""
          />
          <div>
            <h1 className="text-2xl font-semibold">
              Software Developer Co-op | Ricoh
            </h1>
            <div className="">
              Sept 2024 - April 2025
            </div>
            <ul className="list-disc text-gray-300 pt-2">
              <li>
              Developing new features and fixing bugs for RICOH Cloud stream, utilizing <b>Java</b> and <b>Spring boot</b> for backend, integrating 
              smartGWT for dynamic front-end
             
              </li>
              <li>
              Worked with <b>SQL Server</b> for database management and integration.
              </li>
              <li>
              Analyze requirements and specification documents to design and implement coding solutions, working independently 
              or as part of a team. 
              </li>
              <li>
              Worked with Azure DevOps, Jira, and SourceTree for version control and project management. 
              </li>
              <li>
              Develop comprehensive technical documentation and respond to technical inquiries from external software developers.
              </li>
            </ul>
          </div>
        </div>
        <div className="text-white bg-gradient-to-r from-[#2c3a74] to-[#030d35] p-10 m-2 w-[75%] flex  items-center">
        <img className="h-20  pr-10"
            src="https://conestogac.zohorecruit.com/recruit/viewCareerImage.do?page_id=624216000000338275&type=logo&file_name=VARlab.jpg"
            alt=""
          />
          <div>

          <h1 className="text-2xl font-semibold">
            Software Developer co-op  | VARLab
          </h1>
          <div classname="">
            May 2024 - August 2024
          </div>
          <ul className="list-disc pt-3 text-gray-300">
            <li>
            Built an internal productivity tool using React.js, and tailwind CSS to create a meta-search interface that aggregates 
            data from multiple third-party asset stores, improving the efficiency of asset discovery for the development team. 
            </li>
            <li>
            Developed and integrated custom sorting and filtering functionalities, enhancing the search result’s usability and 
            enabling users to quickly access relevant data. 
            </li>
            <li>
            Reduced the need for the asset team to supervise all potential purchases and compare from different stores 
            individually
            </li>
          </ul>
          </div>
        </div>
        <div className="text-white bg-gradient-to-r from-[#2c3a74] to-[#030d35] p-10 m-2 w-[75%] flex items-center">
        <img className="h-20 pr-10"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUKAYuOjghdYK7J3p_Z27HOBjg04p0lAILPA&s"
            alt=""
          />
          <div>

          <h1 className="text-2xl font-semibold">Customer Service | City of Kitchener</h1>
          <div classname="">June 2023 - Present</div>
          <ul className="list-disc pt-3 text-gray-300">
            <li>
            Engaged virtually and in person with stakeholders and participants guiding them through various services
            </li>
            <li>
            Delivered trailed service to meet the needs of each participant, ensuring a seamless user experience, while addressing 
            and resolving any concerns or complaints. 
            </li>
            <li>
            Utilized Microsoft Excel to accurately record statistical information, input ticket data, and organize documentation of 
            relevant program information.
            </li>
          </ul>
        </div>
          </div>
      </div>
    </div>
  );
};

export default Expereince;
