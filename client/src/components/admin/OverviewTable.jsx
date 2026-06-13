import appointmentsIcon from "../../assets/icons/admin/totalappointmentsIcon.png"
import newPatientsIcon from "../../assets/icons/admin/newpatientsicon.png"
import pendingConsultsIcon from "../../assets/icons/admin/pendingconsultscon.png"
import cancelledConsultsIcon from "../../assets/icons/admin/cancelledIcon.png"

const OverviewTable = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          Total Appointments
          <img src={appointmentsIcon} alt=""/>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          New Patients
          <img src={newPatientsIcon} alt="" />
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          Pending Consultations
          <img src={pendingConsultsIcon} alt="" />
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          Cancelled
          <img src={cancelledConsultsIcon} alt="" />
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 mt-6 shadow-sm">
        Today's Appointments
      </div>
    </div>
  );
};

export default OverviewTable;