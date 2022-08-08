import React from 'react';
import styled from 'styled-components';
import CopyToClipBoard from 'react-copy-to-clipboard';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import IconButton from '@mui/material/IconButton';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    EmailShareButton,
    EmailIcon,
} from 'react-share';

const ListVideos = (props) => {

    const video = props.videos.map((video) => {
        const url = 'https://www.youtube.com/embed/' + video.id.videoId;

        const ModalWrap = styled.div`
            left: 0;
            right: 0;
            margin: auto;
            width: 100%;
            max-width: 196vw;
            padding: 10%;
            display: block;
            flex-direction: row;
            align-items: center;
        `;

        const VideoWrap = styled.div`
            position: relative;
            padding-bottom: 56.25%;
            width: 100%;
            iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }

        `;

        const setMessage = "きりぬきあつめ　切り抜き動画をシェアしよう！";

        return ( 
            <ModalWrap>
                <VideoWrap>
                    <iframe 
                    id="ytplayer" 
                    type="ytplayer" 
                    width="300"
                    height="200"
                    allowFullScreen='true'
                    src={url}
                    />
                </VideoWrap>

                <FacebookShareButton 
                    //フェイスブック
                    url={url}
                    quote={setMessage} 
                >
                    <FacebookIcon size={40} round />
                </FacebookShareButton>

                <TwitterShareButton
                    //ツイッター
                    url={url}
                    title={setMessage} 
                >
                    <TwitterIcon size={40} round />
                </TwitterShareButton>

                <EmailShareButton 
                    //メール
                    url={url} 
                    body={setMessage} 
                    subject={setMessage}
                >
                    <EmailIcon size={40} round />
                </EmailShareButton>

                <CopyToClipBoard  
                    // コピー
                    text={url} 
                    onCopy={() => alert('copied!')}
                    style={{marginBottom:30}}
                >
                    <IconButton>
                        <FileCopyIcon/>
                    </IconButton>
                </CopyToClipBoard>

            </ModalWrap>
        )
    });

    return (
        <div>
          {video}
        </div>
    )

}

export default ListVideos;