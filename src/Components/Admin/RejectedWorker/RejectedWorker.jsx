import React from 'react'
import WorkerCard from "../WorkerCard/WorkerCard"

const RejectedWorker = () => {
    const workers = [
        {
            id: 1,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Rejected"
        },
        {
            id: 2,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Rejected"
        },
        {
            id: 3,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Rejected"
        },
        {
            id: 4,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Rejected"
        },
        {
            id: 5,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Rejected"
        },
        {
            id: 6,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Rejected"
        },
        {
            id: 7,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Rejected"
        },
        {
            id: 8,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Rejected"
        },
        {
            id: 9,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Rejected"
        },
        {
            id: 10,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Rejected"
        },
        {
            id: 11,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Rejected"
        },
        {
            id: 12,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Rejected"
        },
        {
            id: 13,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Rejected"
        },
        {
            id: 14,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Rejected"
        },
        {
            id: 15,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Rejected"
        },
        {
            id: 16,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Rejected"
        },
        {
            id: 17,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Rejected"
        },
        {
            id: 18,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Rejected"
        },
        {
            id: 19,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Rejected"
        },
        {
            id: 20,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Rejected"
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
    )
}

export default RejectedWorker