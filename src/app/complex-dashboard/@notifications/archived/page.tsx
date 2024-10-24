import Card from '@/components/card';
import Link from 'next/link';

const ArchivedNotification = () => {
  return (
    <Card>
      Archived Notifications
      <Link href='/complex-dashboard'>Default</Link>
    </Card>
  );
};

export default ArchivedNotification;
