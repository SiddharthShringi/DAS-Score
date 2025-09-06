import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RadioButtons() {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center gap-4">
        <div className="flex items-center space-x-2 border p-2 rounded">
          <RadioGroupItem value="-2" id="strongly-agree" />
          <Label htmlFor="Strongly Agree">Disagree</Label>
        </div>
        <div className="flex items-center space-x-2 border p-2 rounded">
          <RadioGroupItem value="-1" id="agree" />
          <Label htmlFor="Agree">Disagree</Label>
        </div>
        <div className="flex items-center space-x-2 border p-2 rounded">
          <RadioGroupItem value="0" id="Neutral" />
          <Label htmlFor="Neutral">Disagree</Label>
        </div>
        <div className="flex items-center space-x-2 border p-2 rounded">
          <RadioGroupItem value="1" id="option-two" />
          <Label htmlFor="Disagree">Disagree</Label>
        </div>
        <div className="flex items-center space-x-2 border p-2 rounded">
          <RadioGroupItem value="2" id="2" />
          <Label htmlFor="Strongly Disagree" className="whitespace-nowrap">
            Strongly Disgree
          </Label>
        </div>
      </div>
    </RadioGroup>
  );
}
