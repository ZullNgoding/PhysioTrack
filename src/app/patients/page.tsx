'use client';

import React, { useEffect, useState } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Patient } from '@/types';
import { api } from '@/lib/api';

export default function PatientList() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/patients')
      .then(data => setPatients(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-black leading-tight text-text-light dark:text-text-dark">All Patients</h1>
            <p className="text-text-muted-light dark:text-text-muted-dark">Manage all registered patients.</p>
          </div>
          <button className="flex h-10 px-4 items-center justify-center rounded-lg bg-primary text-white font-bold gap-2 hover:bg-blue-600 transition-colors">
            <span className="material-symbols-outlined">add</span>
            Add New Patient
          </button>
        </header>

        {/* Table */}
        <div className="overflow-hidden rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark shadow-sm">
          {loading ? (
            <div className="p-8 text-center text-text-muted-light">Loading patients...</div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="bg-background-light dark:bg-gray-800 text-left text-sm font-medium text-text-muted-light dark:text-text-muted-dark">
                  <th className="p-4 w-10"><input type="checkbox" className="rounded text-primary focus:ring-primary" /></th>
                  <th className="px-4 py-3">Patient Name</th>
                  <th className="px-4 py-3">Condition</th>
                  <th className="px-4 py-3">Last Visit</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light dark:divide-border-dark">
                {patients.map((patient) => (
                  <tr key={patient._id} className="hover:bg-background-light dark:hover:bg-gray-800/50 transition-colors">
                    <td className="p-4"><input type="checkbox" className="rounded text-primary focus:ring-primary" /></td>
                    <td className="px-4 py-3 font-medium text-text-light dark:text-text-dark">{patient.name}</td>
                    <td className="px-4 py-3 text-text-muted-light dark:text-text-muted-dark">{patient.condition}</td>
                    <td className="px-4 py-3 text-text-muted-light dark:text-text-muted-dark">
                        {patient.lastVisit ? new Date(patient.lastVisit).toLocaleDateString() : 'N/A'}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        patient.status === 'Active' ? 'bg-green-100 text-green-800' : 
                        patient.status === 'Inactive' ? 'bg-gray-100 text-gray-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {patient.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="text-primary font-semibold hover:underline">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </AppLayout>
  );
}