export default function Alert({ messages, alertType }) {
	return (
		<>
			{messages
				? messages.errors.map((message) => {
						return <div className={`alert ${alertType}`}>{message.msg}</div>;
				  })
				: ""}
		</>
	);
}
