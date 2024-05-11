import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

export default function HeadLessUI({
  items,
  onChangeLocation,
  searchLocation,
}) {
  const uniquePlaceNames = new Set();
  items.forEach((el) => {
    uniquePlaceNames.add(el.itemLocation.placeName);
  });
  const uniqueItems = Array.from(uniquePlaceNames);

  return (
    <Menu>
      <MenuButton>
        <p className="opacity-70 line-clamp-1">{searchLocation || "Location"}</p>
      </MenuButton>
      <Transition
        enter="transition ease-out duration-75"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <MenuItems
          anchor="bottom center"
          className={
            "z-20 bg-white py-5 px-10 shadow rounded space-y-5 text-end md:text-start"
          }
        >
          {uniqueItems.map((el) => (
            <div key={el.id} onClick={() => onChangeLocation(el)}>
              <MenuItem>
                <p className="cursor-pointer font-medium">{el}</p>
              </MenuItem>
            </div>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
}
