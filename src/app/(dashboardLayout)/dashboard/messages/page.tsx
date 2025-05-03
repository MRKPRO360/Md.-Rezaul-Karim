import Messages from '@/components/Messages/Messages';
import TextHeading from '@/components/TextHeading/TextHeading';

async function MessagesPage() {
  const res = await fetch(
    'https://next-portfolio-server-bay.vercel.app/api/v1/mails'
  );
  const messages = await res.json();

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="mb-8 text-center">
        <TextHeading text="Your Messages" />
      </div>
      <Messages messages={messages.data} />
    </div>
  );
}
export default MessagesPage;
