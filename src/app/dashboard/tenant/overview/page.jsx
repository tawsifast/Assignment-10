import { getBookingByBuyer } from '@/lib/api/booking';
import { getFavouriteProperty } from '@/lib/api/favourite';
import { getUserSession } from '@/lib/core/session';
import TenantOverviewClient from './TenantOverviewClient';

const OverviewPage = async () => {
    const user = await getUserSession();
    
    // সেফটি চেকের জন্য ইউজার ইমেইল এক্সট্রাক্ট করা হলো
    const email = user?.email;
    
    const bookings = email ? (await getBookingByBuyer(email)) || [] : [];
    const favouriteProperties = email ? (await getFavouriteProperty(email)) || [] : [];

    return (
        <TenantOverviewClient 
            bookings={bookings} 
            favourites={favouriteProperties} 
            user={user}
        />
    );
};

export default OverviewPage;