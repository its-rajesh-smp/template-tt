import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-2xl font-bold"> Template UI </h1>
      <Button variant="outline">Button</Button>
    </header>
  );
};
