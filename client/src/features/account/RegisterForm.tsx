import { useForm } from "react-hook-form";
import { useAccount } from "../../lib/hooks/useAccount";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Paper, Typography } from "@mui/material";
import { LockOpen } from "@mui/icons-material";
import TextInput from "../../app/shared/components/TextInput";
import { Link } from "react-router";
import {
  registerSchema,
  type RegisterSchema,
} from "../../lib/schemas/registerSchema";

export default function RegisterForm() {
  const { registerUser } = useAccount();
  const {
    control,
    handleSubmit,
    setError,
    formState: { isSubmitting },
  } = useForm<RegisterSchema>({
    mode: "onTouched",
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterSchema) => {
    await registerUser.mutateAsync(data, {
      onError: (error) => {
        if (Array.isArray(error)) {
          const passwordErrors: string[] = [];
          error.forEach((err) => {
            if (err.includes("Email")) setError("email", { message: err });
            if (err.toLowerCase().includes("password")) {
              passwordErrors.push(err);
            }
          });

          if (passwordErrors.length > 0) {
            setError("password", {
              message: passwordErrors.join("\n"),
            });
          }
        }
      },
    });
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 3,
        gap: 3,
        maxWidth: "md",
        mx: "auto",
        borderRadius: 3,
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={3}
        color="primary.main"
      >
        <LockOpen fontSize="large" />
        <Typography variant="h4">Register</Typography>
      </Box>
      <TextInput label="Email" control={control} name="email" />
      <TextInput label="Display Name" control={control} name="displayName" />
      <TextInput
        type="password"
        label="Password"
        control={control}
        name="password"
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        variant="contained"
        size="large"
      >
        Register
      </Button>
      <Typography sx={{ textAlign: "center" }}>
        Already have an account? <Link to="/login">Sign In</Link>
      </Typography>
    </Paper>
  );
}
