import React from 'react';
import { getProperty } from '@/lib/api/property';
import AdminPropertiesTable from './AdminPropertiesTable';


const AllPropertiesPage = async () => {
    // Fetch properties directly server-side
    const properties = await getProperty() || [];
    
    return (
        <div className="p-6 space-y-6 min-h-screen bg-[#030307]">
            <div className="space-y-1">
                <h1 className="text-2xl font-bold tracking-tight text-slate-100">
                    Property Asset Control
                </h1>
                <p className="text-xs text-slate-500 font-mono">
                    System Node // Administrative Inventory Verification
                </p>
            </div>
            
            <AdminPropertiesTable initialProperties={properties} />
        </div>
    );
};

export default AllPropertiesPage;