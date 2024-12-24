interface Person {
    name: string;
    role: string;
  }
  
  interface SidebarProps {
    recommendedPeople: Person[];
  }
  
  const Sidebar: React.FC<SidebarProps> = ({ recommendedPeople }) => {
    return (
      <aside className="w-full max-w-6xl flex gap-4">
        <div className="w-1/3 p-4 bg-white rounded shadow">
          <h3 className="text-md font-bold mb-4">Get unlimited access</h3>
          <p className="text-sm text-gray-600 mb-4">
            Plans starting at less than $1/week.
          </p>
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Get unlimited access
          </button>
        </div>
        <div className="w-2/3 p-4 bg-white rounded shadow">
          <h3 className="text-md font-bold mb-4">People you might be interested</h3>
          {recommendedPeople.map((person, index) => (
            <div key={index} className="flex items-center mb-4">
              <div className="flex-1">
                <p className="text-sm font-bold">{person.name}</p>
                <p className="text-sm text-gray-600">{person.role}</p>
              </div>
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                Follow
              </button>
            </div>
          ))}
        </div>
      </aside>
    );
  };
  
  export default Sidebar;
  