"use client"
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

import { Icons } from '@/components/Icons';

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from '@/ui/DropdownMenu';
import Button from '@/ui/Button';


interface ThemeToggleProps {

}

export default function ThemeToggle(props: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [hasThemeLoaded, setHasThemeLoaded] = useState(false);

  // This effect will run once the theme is determined
  useEffect(() => {
    if (theme) setHasThemeLoaded(true);
  }, [theme]);

  // If the theme is not loaded, don't render anything
  if (!hasThemeLoaded) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button onClick={() => setTheme('dark')} variant="ghost" size="sm">
          <Icons.Sun className="rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100" />
          <Icons.Moon className='absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100' />
          {/* This class, sr-only, hides an element in all devices except for the Screen Readers */}
          <span className='sr-only'>Toogle Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' forceMount>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Icons.Sun className='mr-2 h-4 w-4' />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Icons.Moon className='mr-2 h-4 w-4' />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <Icons.Laptop className='mr-2 h-4 w-4' />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
