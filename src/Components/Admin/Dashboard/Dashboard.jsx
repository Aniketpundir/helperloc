import Navbar from "../Navbar/Navbar";
import WorkerCard from "../WorkerCard/WorkerCard";
import "./Dashboard.css";

function Dashboard() {

    const workers = [
        {
            id: 1,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Pending"
        },
        {
            id: 2,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Pending"
        },
        {
            id: 3,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Pending"
        },
        {
            id: 4,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Pending"
        },
        {
            id: 5,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Pending"
        },
        {
            id: 6,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Pending"
        },
        {
            id: 7,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Pending"
        },
        {
            id: 8,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Pending"
        },
        {
            id: 9,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Pending"
        },
        {
            id: 10,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Pending"
        },
        {
            id: 11,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Pending"
        },
        {
            id: 12,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Pending"
        },
        {
            id: 13,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Pending"
        },
        {
            id: 14,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Pending"
        },
        {
            id: 15,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Pending"
        },
        {
            id: 16,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Pending"
        },
        {
            id: 17,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Pending"
        },
        {
            id: 18,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Pending"
        },
        {
            id: 19,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Pending"
        },
        {
            id: 20,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Pending"
        },
    ];

    return (
        <div className="admins-dashboard">
            <div className="admins-content">
                {
                    workers.map((worker) => (
                        <WorkerCard key={worker.id} worker={worker} />
                    ))}
            </div>
        </div>
    );
}

export default Dashboard;