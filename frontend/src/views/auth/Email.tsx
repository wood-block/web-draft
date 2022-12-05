import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  auth as firebaseAuth,
  useAuthActions,
} from "../../features/auth/auth.action";
import { authState } from "../../features/auth/auth.state";

function Email() {
  const navigate = useNavigate();
  const [auth, _] = useRecoilState(authState);
  const [user, loading, err] = useAuthState(firebaseAuth);
  const authActions = useAuthActions();

  useEffect(() => {
    if (!auth) {
      alert("권한이 없습니다");
      navigate("/");
    }
    if (auth && user?.emailVerified) {
      alert("이메일 인증에 성공했습니다.");
      navigate("/");
    }
  }, [user, loading]);

  return (
    <div className="auth">
      <div className="container">
        <button
          className="auth__btn"
          onClick={authActions.sendEmailVerificationLink}
        >
          인증 이메일 전송
        </button>
        <button
          className="auth__btn"
          onClick={authActions.checkEmailVerification}
        >
          인증 완료
        </button>
      </div>
    </div>
  );
}

export default Email;
