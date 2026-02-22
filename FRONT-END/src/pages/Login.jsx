import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Lock, Eye, EyeOff } from "lucide-react";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="main" style={styles.container}>
      <div style={styles.card}>
        {/* Top Icon Circle */}
        <div style={styles.topIconCircle}>
          <User size={48} color="white" />
          <div style={styles.flashBadge}>⚡</div>
        </div>

        <h1 style={styles.brandTitle}>Login to Power Hive</h1>

        <div style={styles.form}>
          {/* User ID Input */}
          <div style={styles.inputWrapper}>
            <input
              type="text"
              placeholder="User ID"
              style={styles.input}
            />
            <User size={20} color="#64748b" style={styles.inputIcon} />
          </div>

          {/* Password Input */}
          <div style={styles.inputWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="************"
              style={styles.input}
            />
            <div style={styles.iconGroup}>
              {showPassword ? (
                <EyeOff
                  size={20}
                  color="#64748b"
                  style={styles.clickableIcon}
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <Eye
                  size={20}
                  color="#64748b"
                  style={styles.clickableIcon}
                  onClick={togglePasswordVisibility}
                />
              )}
              <Lock size={20} color="#64748b" style={styles.inputIconRight} />
            </div>
          </div>

          <button
            onClick={() => navigate("/dashboard")}
            style={{
              ...styles.button,
              backgroundColor: isHovered ? "#2563eb" : "transparent",
              color: isHovered ? "white" : "#2563eb",
              border: "2px solid #2563eb"
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            LOGIN

          </button>
        </div>

        <div style={styles.footer}>
          <Link to="#" style={styles.forgotLink}>
            Forgot Password?
          </Link>
        </div>
        <p style={styles.signUpText}>
          Don't have an account?{" "}
          <Link to="/signup" style={styles.link}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f1f3f8",
    padding: "24px"
  },
  card: {
    width: "100%",
    maxWidth: "400px",
    padding: "64px 40px 40px",
    backgroundColor: "white",
    borderRadius: "32px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    textAlign: "center",
    position: "relative",
    marginTop: "40px"
  },
  topIconCircle: {
    width: "100px",
    height: "100px",
    backgroundColor: "#2563eb",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "-50px",
    left: "50%",
    transform: "translateX(-50%)",
    boxShadow: "0 4px 12px rgba(37, 99, 235, 0.3)"
  },
  flashBadge: {
    position: "absolute",
    bottom: "0",
    right: "-5px",
    backgroundColor: "#f97316",
    color: "white",
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    border: "3px solid white",
    boxShadow: "0 2px 8px rgba(249, 115, 22, 0.4)"
  },
  brandTitle: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#000",
    marginBottom: "40px",
    marginTop: "10px"
  },
  form: {
    textAlign: "left"
  },
  inputWrapper: {
    position: "relative",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center"
  },
  input: {
    width: "100%",
    padding: "16px 48px 16px 20px",
    borderRadius: "16px",
    border: "none",
    fontSize: "18px",
    outline: "none",
    backgroundColor: "#eff1f3",
    color: "#1e293b"
  },
  inputIcon: {
    position: "absolute",
    right: "20px"
  },
  iconGroup: {
    position: "absolute",
    right: "20px",
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },
  inputIconRight: {
    marginLeft: "5px"
  },
  clickableIcon: {
    cursor: "pointer",
    transition: "color 0.2s"
  },
  button: {
    width: "100%",
    padding: "16px",
    borderRadius: "12px",
    fontSize: "20px",
    fontWeight: "700",
    cursor: "pointer",
    marginTop: "10px",
    transition: "all 0.2s",
    boxShadow: "0 4px 12px rgba(37, 99, 235, 0.2)"
  },
  footer: {
    marginTop: "24px"
  },
  forgotLink: {
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "15px"
  },
  signUpText: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#64748b"
  },
  link: {
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: "700"
  }
};

export default Login;
