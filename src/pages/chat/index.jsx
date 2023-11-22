import React, {FC} from "react";
import {Card} from "antd";

const Chat: FC<any> = () => {

    const response = {
        "geo": {"country": "Hong Kong", "country_iso": "HK"},
        "username": null,
        "is_authenticated": null,
        "email": null,
        "avatar_url": null,
        "is_subscriber": null,
        "subscription_type": null,
        "settings": null
    }

    return (
        <div className={'chat-bg'}>
            <Card>
                <text>
                    <pre><code>{JSON?.stringify(response, null, '  ')}</code></pre>
                </text>

            </Card>
        </div>
    )
}


export default Chat