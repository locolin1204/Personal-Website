import * as React from "react";
import {
	StyledFooter,
	StyledIconContainer,
	StyledIconLink,
	StyledTextContainer,
} from "../../styles/layout/footer.styled";
import { IoMdMail } from "react-icons/io";
import { BsLinkedin, BsGithub } from "react-icons/bs";
// import toast, { Toaster } from 'react-hot-toast';
import styled from "styled-components";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";

const StyledToastContainer = styled(ToastContainer)`
	.Toastify__toast {
		font-size: 0.9rem;
		width: 5rem;
		text-align: center;
		margin-left: 0.5rem;
		margin-bottom: 0.5rem;
		min-height: 0.5rem;
		padding: 0;
		/* margin: 0; */
	}
	.Toastify__toast-body {
		/* min-height: 0.5rem;
		padding: 0;
		margin: 0; */
	}
`;

const Footer = () => {
	// const copyNotification = () => toast('copied to clipboard.',{
	// 	duration: 1000,
	// 	position: "bottom-left",
	// });
	const copyNotify = () => {
		toast("copied", {
			position: "bottom-left",
			autoClose: 2500,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			progress: undefined,
			theme: "light",
			closeButton: false,
		});
	};

	const fade = cssTransition({
		enter: "animate__animated animate__fadeIn animate__faster",
		exit: "animate__animated animate__fadeOut animate__faster",
	});

	return (
		<StyledFooter>
			<StyledIconContainer>
				<StyledIconLink
					onClick={() => {
						navigator.clipboard.writeText("locolin99@gmail.com");
						copyNotify();
					}}
					target="_blank"
				>
					<StyledToastContainer
						position="bottom-left"
						autoClose={2500}
						limit={5}
						hideProgressBar
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable={false}
						pauseOnHover
						theme="light"
						transition={fade}
					/>
					<IoMdMail />
					{/* <Toaster /> */}
				</StyledIconLink>
				<StyledIconLink
					href={"https://www.linkedin.com/in/colin-lo-789086236/"}
					target="_blank"
				>
					<BsLinkedin />
				</StyledIconLink>
				<StyledIconLink href={"https://github.com/locolin1204"} target="_blank">
					<BsGithub />
				</StyledIconLink>
			</StyledIconContainer>
			<StyledTextContainer>
				i love solving problems creatively. <br />
				different methods and strategies could surprise our lives in different
				ways.
				<br />
				<br />
				<b>&copy; 2023 colin lo. all right reserved.</b>
			</StyledTextContainer>
		</StyledFooter>
	);
};

export default Footer;