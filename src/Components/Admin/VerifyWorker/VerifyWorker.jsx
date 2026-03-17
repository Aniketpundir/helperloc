import React from 'react'
import WorkerCard from "../WorkerCard/WorkerCard"

const VerifyWorker = () => {


    const workers = [
        {
            id: 1,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Verify"
        },
        {
            id: 2,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Verify"
        },
        {
            id: 3,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Verify"
        },
        {
            id: 4,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Verify"
        },
        {
            id: 5,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Verify"
        },
        {
            id: 6,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Verify"
        },
        {
            id: 7,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Verify"
        },
        {
            id: 8,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Verify"
        },
        {
            id: 9,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Verify"
        },
        {
            id: 10,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Verify"
        },
        {
            id: 11,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Verify"
        },
        {
            id: 12,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Verify"
        },
        {
            id: 13,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Verify"
        },
        {
            id: 14,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Verify"
        },
        {
            id: 15,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Verify"
        },
        {
            id: 16,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Verify"
        },
        {
            id: 17,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Verify"
        },
        {
            id: 18,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Verify"
        },
        {
            id: 19,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Verify"
        },
        {
            id: 20,
            name: "Rohit Kumar",
            mobile: "9876543210",
            email: "rohit@gmail.com",
            referralCode: "ROH123",
            referralName: "Amit",
            image: "https://i.pravatar.cc/150?img=3",
            status: "Verify"
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

export default VerifyWorker