export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-muted min-h-screen w-full px-60 py-10">{children}</div>
  );
};
