export const menuItems = [
  { name: "Acasă", href: "/" },
  { name: "Servicii", href: "/servicii" },
  { name: "Contact", href: "/contact" },
];

export const contact = {
  phone: "+40 787 675 225",
  email: "contact@briocleaning.ro",
};

export const normPhone = () => contact.phone.replace(/[\s+]/g, "");
