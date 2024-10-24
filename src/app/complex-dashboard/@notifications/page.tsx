import Card from '@/components/card';
import Link from 'next/link';

const Notifications = () => {
  return (
    <Card>
      Notifications
      <Link href='complex-dashboard/archived'>Archived</Link>
    </Card>
  );
};

export default Notifications;
