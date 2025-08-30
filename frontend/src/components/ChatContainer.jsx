import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore.js"
import ChatHeader from "./ChatHeader.jsx";
import MessageInput from "./MessageInput.jsx";
import MessageSkeleton from "./skeletons/MessageSkeleton.jsx";
import { useAuthStore } from "../store/useAuthStore.js";

const ChatContainer = () => {
	const { messages, getMessages, isMessagesLoading, selectedUser } = useChatStore();
	const { authUser } = useAuthStore();

	useEffect(() => {
		getMessages(selectedUser._id);
	}, [selectedUser._id, getMessages]);

	if (isMessagesLoading) {
		return (
			<div className="flex-1 flex flex-col overflow-auto">
				<ChatHeader />
				<MessageSkeleton />
				<MessageInput />
			</div>
		);
	}

	return (
		<div className="flex-1 flex flex-col overflow-auto">
			<ChatHeader />

			<div className="flex-1 overflow-y-auto p-4 space-y-4">
				{
					messages.map((message) => (
						<div key={message._id}
							className={`chat ${message.sender._id === authUser._id ? "chat-end" : "chat-start"}`}
						>

						</div>
					))
				}
			</div>

			<MessageInput />
		</div>
	)
}

export default ChatContainer