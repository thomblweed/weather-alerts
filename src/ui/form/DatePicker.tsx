import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/ui/components/button';
import { Calendar } from '@/ui/components/calendar';
import { Label } from '@/ui/components/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/ui/components/popover';

interface DatePickerProps {
  label: string;
  id: string;
  value: Date | undefined;
  onSelect: (date: Date | undefined) => void;
}

export const DatePicker = ({ label, id, value, onSelect }: DatePickerProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor={id} className="px-1">
        {label}
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id={id}
            className="w-48 justify-between font-normal"
          >
            {value?.toLocaleDateString() ?? 'Select date'}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            captionLayout="dropdown"
            onSelect={(date) => {
              setOpen(false);
              onSelect(date);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
