

export default function CoversationCardMaker() {

    const [UserPrompt, setTextValue] = useState('');
    const navigate = useNavigate();
    const Conversations = [];

    const SendPrompt = () => {
        console.log(UserPrompt);
        Conversations.push(UserPrompt);
        navigate('./AnswerPage', { state: { Conversations: Conversations } });
    };


    return <section>

        </section>
    
}


