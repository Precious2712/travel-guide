import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PasswordRequirementProps {
  met: boolean;
  text: string;
}

const PasswordRequirement = ({ met, text }: PasswordRequirementProps) => (
  <div className="flex items-center gap-2 text-sm">
    <div
      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
        met ? "gradient-sky" : "bg-muted"
      }`}
    >
      {met && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Check className="h-3 w-3 text-primary-foreground" />
        </motion.div>
      )}
    </div>
    <span className={met ? "text-foreground" : "text-muted-foreground"}>
      {text}
    </span>
  </div>
);

interface PasswordRequirementsProps {
  password: string;
  strength: number;
}

export function PasswordRequirements({ password, strength }: PasswordRequirementsProps) {
  const requirements = [
    { met: password.length >= 8, text: "At least 8 characters" },
    { met: /[A-Z]/.test(password), text: "One uppercase letter" },
    { met: /[0-9]/.test(password), text: "One number" },
    { met: /[^A-Za-z0-9]/.test(password), text: "One special character" },
  ];

  const strengthLabel =
    strength <= 25 ? "Weak" : strength <= 50 ? "Fair" : strength <= 75 ? "Good" : "Strong";
  const strengthClass =
    strength <= 25 ? "strength-weak" : strength <= 50 ? "strength-fair" : strength <= 75 ? "strength-good" : "strength-strong";

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      className="mt-3 space-y-3 rounded-lg border border-border bg-muted/50 p-4"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">Password Strength</span>
        <span className={`text-xs font-semibold ${strength > 50 ? "text-foreground" : "text-muted-foreground"}`}>
          {strengthLabel}
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          className={`h-full rounded-full ${strengthClass}`}
          initial={{ width: 0 }}
          animate={{ width: `${strength}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        {requirements.map((req, i) => (
          <PasswordRequirement key={i} {...req} />
        ))}
      </div>
    </motion.div>
  );
}
