import React from "react";
import Template from "../templates/TemplateMenu";
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() => 
    createStyles({
        paper: {
            textAlign: 'left',
            paddingLeft: 7,
            paddingBottom: 1,
        },
    }),
);

const ProductPage = () =>{
    const classes = useStyles();
    return(
        <Template>
            <h1>このサイトについて</h1>
            <Paper elevation={3} className={classes.paper}>
                <h2>きりぬきあつめとは</h2>
                <p>
                    Vtuberの切り抜き動画を集めるWEBアプリです。
                    見たいVtuberさんの名前で検索してください。
                </p>
            </Paper>

            <Paper elevation={3} className={classes.paper}>
                <h2>本アプリの目的</h2>
                <p>
                    切り抜きをもっと見やすく、快適なVtuberライフを送りたいがために作成しました。
                    また、SPAの学習の成果物として作成した面もあります。
                    （ご指摘・質問など大歓迎）
                </p>
            </Paper>

            <Paper elevation={3} className={classes.paper}>
                <h2>参考資料・ページ</h2>
                <p>
                    大変参考になりました。ありがとうございました。
                </p>
                <ul>
                    <li><a href='https://qiita.com/rei67/items/25fa4a069157fd6c34b4'>React+Youtube APIについて</a></li>
                    <li><a href='https://blog.f-arts.work/archives/791'>Material-UIについて</a></li>
                </ul>
            </Paper>
            <br/>
        </Template>
    );
};

export default ProductPage;