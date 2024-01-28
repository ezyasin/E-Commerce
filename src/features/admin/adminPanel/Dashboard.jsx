"use client";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();

  const orders = [
    { id: 1, customer: "John Doe", total: 150, status: "Processing" },
    { id: 2, customer: "Jane Smith", total: 200, status: "Shipped" },
  ];

  const payments = [
    { id: 1, customer: "John Doe", amount: 150, status: "Paid" },
    { id: 2, customer: "Jane Smith", amount: 200, status: "Pending" },
  ];

  const userRole =
    typeof window !== "undefined" ? localStorage.getItem("role") : null;

  useEffect(() => {
    if (userRole !== "admin") {
      router.push("/admin");
    }
  }, [userRole]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-collapse border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border">ID</th>
                <th className="p-2 border">Customer</th>
                <th className="p-2 border">Total</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="p-2 border">{order.id}</td>
                  <td className="p-2 border">{order.customer}</td>
                  <td className="p-2 border">${order.total.toFixed(2)}</td>
                  <td className="p-2 border">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Payments</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-collapse border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border">ID</th>
                <th className="p-2 border">Customer</th>
                <th className="p-2 border">Amount</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id}>
                  <td className="p-2 border">{payment.id}</td>
                  <td className="p-2 border">{payment.customer}</td>
                  <td className="p-2 border">${payment.amount.toFixed(2)}</td>
                  <td className="p-2 border">{payment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
