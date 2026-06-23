import { getUserSession } from "@/lib/core/session";
import AddPropertyForm from "./AddPropertyForm";


const AddPropertyPage = async () => {
    const user = await getUserSession();

    return (
        <div className="min-h-screen bg-[#0a0a0f] p-4 md:p-8 font-sans">
            {/* Upper Dashboard Section Header Banner */}
            <div className="max-w-4xl mx-auto mb-8 bg-gradient-to-r from-purple-900/20 via-slate-800/40 to-cyan-950/20 border border-white/10 p-6 rounded-2xl shadow-xl shadow-purple-500/[0.02]">
                <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                    Property Configuration
                </h1>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest">
                    NexusHome Hub // Add New Node
                </p>
            </div>

            <AddPropertyForm owner={user}/>
        </div>
    );
};

export default AddPropertyPage;