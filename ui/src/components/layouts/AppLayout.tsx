export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-muted w-full min-h-screen px-60 py-10">{children}</div>
  );
};
