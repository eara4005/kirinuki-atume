import React from "react";
import styled from "styled-components";
import CopyToClipBoard from "react-copy-to-clipboard";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import IconButton from "@material-ui/core/IconButton";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

// 取得したJSONをmap関数からid等の要素に分解 → iframeに表示させる関数コンポーネント
const ListVideos = (props) => {
  // propsで渡された動画情報が含まれているJSONから特定の値だけ取り出す。→ 取得した動画分だけ繰り返し
  const video_yt = props.youtube.map((video) => {
    // 取得した動画のIDを、youtube動画URLに変換
    const url = "https://www.youtube.com/embed/" + video.id.videoId;

    //div要素を定義
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

    // 共有した際にタイトルとして表示させるメッセージを定義
    const setMessage =
      "切り抜き動画をシェアしよう！  #Vtuber切り抜き #きりぬきあつめ";

    // dom生成
    return (
      <ModalWrap>
        <VideoWrap>
          {/* URLを指定して、iframe内に埋め込む */}
          <iframe
            id="ytplayer"
            type="ytplayer"
            width="300"
            height="200"
            allowFullScreen="true"
            src={url}
          />
        </VideoWrap>

        {/* 共有ボタンの生成 */}
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
          onCopy={() => alert("copied!")}
          style={{ marginBottom: 30 }}
        >
          <IconButton>
            <FileCopyIcon />
          </IconButton>
        </CopyToClipBoard>
      </ModalWrap>
    );
  });

  // niconico用
  const video_nc = props.ncnc.map((video) => {
    // 取得したcontentnIdをurlに変換
    const iframe_url = "https://embed.nicovideo.jp/watch/" + video.contentId;
    const link_url = "https://www.nicovideo.jp/watch/" + video.contentId;
    //div要素を定義
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

    // 共有した際にタイトルとして表示させるメッセージを定義
    const setMessage =
      "切り抜き動画をシェアしよう！  #Vtuber切り抜き #きりぬきあつめ";

    // dom生成
    return (
      <ModalWrap>
        <VideoWrap>
          {/* URLを指定して、scriptタグ内に埋め込む */}
          <iframe
            id="ncplayer"
            width="300"
            height="200"
            src={iframe_url}
            frameborder="0"
          >
            <a href={link_url}></a>
          </iframe>
        </VideoWrap>

        {/* 共有ボタンの生成 */}
        <FacebookShareButton
          //フェイスブック
          url={link_url}
          quote={setMessage}
        >
          <FacebookIcon size={40} round />
        </FacebookShareButton>

        <TwitterShareButton
          //ツイッター
          url={link_url}
          title={setMessage}
        >
          <TwitterIcon size={40} round />
        </TwitterShareButton>

        <EmailShareButton
          //メール
          url={link_url}
          body={setMessage}
          subject={setMessage}
        >
          <EmailIcon size={40} round />
        </EmailShareButton>

        <CopyToClipBoard
          // コピー
          text={link_url}
          onCopy={() => alert("copied!")}
          style={{ marginBottom: 30 }}
        >
          <IconButton>
            <FileCopyIcon />
          </IconButton>
        </CopyToClipBoard>
      </ModalWrap>
    );
  });

  return (
    // 処理済みの動画をdomへ反映させる
    <>
      {video_yt}
      {video_nc}
    </>
  );
};

export default ListVideos;
