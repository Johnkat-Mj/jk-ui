import { useTheme } from "next-themes"



const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  return (
    <button
      onClick={() => {
        if (theme === "light") {
          return setTheme("dark")
        }
        return setTheme("light")
      }}
      className="outline-none "
    >
      <span className="sr-only">Switch Theme</span>
      <span
        aria-hidden="true"
        className="flex dark:hidden transition animate-spin-icon ease-out text-gray-500 dark:text-gray-300 iconify ph--sun"
      >
        
      </span>
      <span
        aria-hidden="true"
        className="hidden dark:flex transition animate-spin-icon duration-300 ease-out text-gray-500 dark:text-gray-300 iconify ph--moon"
      >
      </span>
    </button>
  )
}

export default ThemeSwitcher
