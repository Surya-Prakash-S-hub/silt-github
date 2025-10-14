export const Mission = () => {
  const missionFirst = [
    { value: "Site Study, Design, Sales, Planning, Projects & Services." },
    { value: "HVAC & Refrigeration related Turnkey jobs." },
    { value: " Complete low side works & ITC of HVAC Systems." },
    {value:" CAMC / NCAMC & Rental solution for all DX/IDX type of A/C systems.",},
    {value:"Condenser / Evaporator Replacing, Leak Arresting & Revamping All kind of AC Systems.",},
    { value: "All kind of Electrical & Plumbing works." },
    { value: " ACP / MS / SS / Aluminum Fabrication Work." },
  ];
  const missionSecond = [
    {value:"Chiller, AHU Unloading, Lifting, Shifting, Installation, Testing & Commissioning Works.",},
    {value:" Complete Chiller, AHU Maintenance & Repairing, Chemical Dosing works.",},
    { value: " Complete Water balancing & Air Balancing solutions." },
    {value:"Converting AHU as Smart AHU Retrofits / UVGI / AHU Descaling / EC Fan with IOT Solutions.",},
    {value: "All kind of GI / ALU / PUFF / Fabric Ducting Supply & Errection.",},
    { value: " False Ceiling/Flooring Works & Roofing Turn key jobs." },
    { value: "Providing Manpower for HVAC O&M." },
  ];
  return (
    <>
      <section id="OurMission">
        <div className="wrapMission">
          <h1>
            Our <span>Mission</span>
          </h1>
          <div className="missionContent">
            <div className="missionList first">
              <ul>
                {missionFirst.map((value, index) => {
                  return (
                    <li key={index} data-aos="fade-right" data-aos-delay={index + 100 * index + 1}>
                      {" "}
                      <div className="pinPoint" >
                        <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                      </div>{" "}
                      {value.value}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="missionList second">
              <ul>
                {missionSecond.map((value, index) => {
                  return (
                    <li key={index} data-aos="fade-right" data-aos-delay={index + 8}>
                      {" "}
                      <div className="pinPoint">
                        <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                      </div>{" "}
                      {value.value}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="ChangeGraph"></div>
      </section>
    </>
  );
};
