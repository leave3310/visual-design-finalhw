import React, {useState} from "react";
import styled from 'styled-components'
import { Container, ButtonGroup, Button } from "react-bootstrap";

const allcharacters = [{
    engName: 'albedo',
    chinName: '阿貝多',
    des: `阿貝多，又稱為「白堊之子」，是蒙德國岩元素的角色。
    神秘的阿貝多是西風騎士團調查隊的首席煉金術士和隊長，以砂糖為助手。 他渴望了解提瓦特的世界，仔細研究他周圍的每個現象。`,
    element: '岩',
    weapon: '單手劍'
},
{
    engName: 'aloy',
    chinName: '埃洛伊',
    des: `曾經是流放者，如今則是無比機敏的獵手。隨時準備著為了正當之事而挽弓放箭。`,
    element: '冰',
    weapon: '弓'
},
{
    engName: 'amber',
    chinName: '安柏',
    des: `永遠充滿活力的女孩，騎士團最優秀，同時也是最後的偵察騎士`,
    Element: '火',
    weapon: '弓'
},
{
    engName: 'ayaka',
    chinName: '神里綾華',
    des: `稻妻「社奉行」神裡家的大小姐。端莊而文雅，聰慧又堅韌`,
    Element: '冰',
    weapon: '單手劍'
},
{
    engName: 'barbara',
    chinName: '芭芭拉',
    des: `蒙德城的大家都喜歡芭芭拉。 「偶像」這個詞是她從一本雜誌裡看到的`,
    Element: '水',
    weapon: '法器'
},
{
    engName: 'beidou',
    chinName: '北斗',
    des: `武裝船隊「南十字」的首領，豪快的大姐頭`,
    Element: '雷',
    weapon: '雙手劍'
},
{
    engName: 'bennett',
    chinName: '班尼特',
    des: `蒙德的冒險家少年，擁有與他的善良毫不相稱的霉運。`,
    Element: '火',
    weapon: '單手劍'
},
{
    engName: 'chongyun',
    chinName: '重雲',
    des: `驅邪世家的年輕方士，為壓制自身的【純陽之體】費盡心機。`,
    Element: '冰',
    weapon: '雙手劍'
},
{
    engName: 'diluc',
    chinName: '迪盧克',
    des: `坐擁蒙德大半酒業的貴公子，財力、人望、能力都令人無法小覷。`,
    Element: '火',
    weapon: '雙手劍'
},
{
    engName: 'diona',
    chinName: '迪奧娜',
    des: `遺傳了稀薄的「非人」血統的少女,「貓尾酒館」的超人氣調酒師。貓耳娘，黑暗釀酒師`,
    Element: '冰',
    weapon: '弓'
},
{
    engName: 'eula',
    chinName: '優菈',
    des: `古老家族出身的「浪花騎士」，西風騎士團游擊小隊隊長。身為舊貴族後裔卻加入了堪稱死對頭的西風騎士團，該事件至今仍是蒙德一大謎團。`,
    Element: '冰',
    weapon: '雙手劍'
},
{
    engName: 'fischl',
    chinName: '菲謝爾',
    des: `自稱「斷罪之皇女」，與名為奧茲的漆黑夜鴉同行的神秘少女`,
    Element: '雷',
    weapon: '弓'
},
{
    engName: 'ganyu',
    chinName: '甘雨',
    des: `月海亭的秘書，體內流淌著仙獸「麒麟」的血脈。`,
    Element: '冰',
    weapon: '弓'
},
{
    engName: 'gorou',
    chinName: '五郎',
    des: `海祇岛军的大将，深受部下信赖。`,
    Element: '岩',
    weapon: '弓'
},
{
    engName: 'hutao',
    chinName: '胡桃',
    des: `「往生堂」七十七代堂主，年紀輕輕就已主掌璃月的葬儀事務`,
    Element: '火',
    weapon: '長柄武器'
},
{
    engName: 'itto',
    chinName: '荒瀧一斗',
    des: `活躍在稻妻城花見坂的「荒瀧派」初代目頭領。什麼，從沒聽說過荒瀧派？你是想找茬嗎？`,
    Element: '岩',
    weapon: '雙手劍'
},
{
    engName: 'jean',
    chinName: '琴',
    des: `正直嚴謹的蒲公英騎士，蒙德西風騎士團的代理團長。`,
    Element: '風',
    weapon: '單手劍'
},
{
    engName: 'kaeya',
    chinName: '凱亞',
    des: `異國面容的劍鬥士，西風騎士團的頭腦派人物。`,
    Element: '冰',
    weapon: '單手劍'
},
{
    engName: 'kazuha',
    chinName: '楓原萬葉',
    des: `來自稻妻的浪人武士，如今棲身於璃月船隊「南十字」中。性情溫和而灑脫，心中埋藏著許多往事。`,
    Element: '風',
    weapon: '單手劍'
},
{
    engName: 'keqing',
    chinName: '刻晴',
    des: `璃月七星之一，玉衡星。對「帝君一言而決的璃月」頗有微詞——但實際上，神挺欣賞她這樣的人。`,
    Element: '雷',
    weapon: '單手劍'
},
{
    engName: 'kokomi',
    chinName: '珊瑚宮心海',
    des: `海衹岛的「现人神巫女」，统管海祇岛各项事宜的少女。`,
    Element: '水',
    weapon: '法器'
},
{
    engName: 'lisa',
    chinName: '麗莎',
    des: `慵懶而博學的圖書管理員，須彌教令院「兩百年一見」的天才畢業生。`,
    Element: '雷',
    weapon: '法器'
},
{
    engName: 'mona',
    chinName: '莫娜',
    des: `神秘的少女占星術士，聲稱自己是「偉大的占星術士莫娜」，擁有與名號相符的不俗實力，博學而高傲。`,
    Element: '水',
    weapon: '法器'
},
{
    engName: 'ningguang',
    chinName: '凝光',
    des: `「璃月七星」中的「天權」，其名下財富之多，全大陸鮮有人能望其項背`,
    Element: '岩',
    weapon: '法器'
},
{
    engName: 'noelle',
    chinName: '諾艾爾',
    des: `「西風騎士團」的可靠女僕，夢想有天能成為正式的騎士`,
    Element: '岩',
    weapon: '雙手劍'
},
{
    engName: 'qiqi',
    chinName: '七七',
    des: `藥廬“不卜廬”的採藥姑娘兼學徒，面色蒼白如紙的不死之人。話很少，也沒有什麼表情。曾因“仙緣”而擁有了被凡間稱作殭屍的不死之身，外表永遠停留在了逝去那年，年齡不可考。`,
    Element: '冰',
    weapon: '單手劍'
},
{
    engName: 'razor',
    chinName: '雷澤',
    des: `住在蒙德地區奔狼領，遠離城市與人群，和狼一同生活的少年。直覺銳利，身姿迅捷。`,
    Element: '雷',
    weapon: '雙手劍'
},
{
    engName: 'rosaria',
    chinName: '羅莎莉亞',
    des: `除了打扮哪裡都不像神職人員的修女。冷淡的言行中透著銳利。總是單獨行動。`,
    Element: '冰',
    weapon: '長柄武器'
},
{
    engName: 'sara',
    chinName: '九條裟羅',
    des: `「天領奉行」的大將，殺伐果斷，驍勇善戰。`,
    Element: '雷',
    weapon: '弓'
},
{
    engName: 'sayu',
    chinName: '早柚',
    des: `属于「终末番」的忍者。身形小巧，总像没睡饱一样。`,
    Element: '風',
    weapon: '雙手劍'
},
{
    engName: 'shogun',
    chinName: '雷電將軍',
    des: `其身為御建鳴神主尊大御所大人，許稻妻人民以亙古不變的「永恆」。`,
    Element: '雷',
    weapon: '長柄武器'
},
{
    engName: 'sucrose',
    chinName: '砂糖',
    des: `對萬物充滿好奇的煉金術士，「生物煉金」學派的研究者。`,
    Element: '風',
    weapon: '法器'
},
{
    engName: 'tartaglia',
    chinName: '達達利亞',
    des: `愚人眾執行官第十一位，「公子」，其戰績威名遠揚。`,
    Element: '水',
    weapon: '弓'
},
{
    engName: 'traveler',
    chinName: '旅行者',
    des: `從世界之外漂流而來的旅行者，被神帶走血親，自此踏上尋找七神之路。`,
    Element: '所有屬性',
    weapon: '單手劍'
},
{
    engName: 'venti',
    chinName: '溫迪',
    des: `蒙德城諸多吟遊詩人中的一位，自由自在地穿行在街頭巷尾`,
    Element: '風',
    weapon: '弓'
},
{
    engName: 'xiangling',
    chinName: '香菱',
    des: `來自璃月，名聲在外的少女廚師，對料理之道極具熱情，拿手麻辣菜餚堪稱一絕。`,
    Element: '火',
    weapon: '長柄武器'
},
{
    engName: 'xiao',
    chinName: '魈',
    des: `守護璃月的仙人，「夜叉」。美號「降魔大聖」，妙稱「護法夜叉大將」。`,
    Element: '風',
    weapon: '長柄武器'
},
{
    engName: 'xingqui',
    chinName: '行秋',
    des: `經常能在書攤看到的少年人。手執長劍，胸中常懷俠義之心。`,
    Element: '水',
    weapon: '單手劍'
},
{
    engName: 'xinyan',
    chinName: '辛焱',
    des: `璃月港唯一的搖滾歌手，以音樂和熱情歌頌著對「成見」的反抗。`,
    Element: '火',
    weapon: '雙手劍'
},
{
    engName: 'yanfei',
    chinName: '煙緋',
    des: `活躍在璃月港的知名律師諮詢師，混有仙獸血脈的精明少女。`,
    Element: '火',
    weapon: '法器'
},
{
    engName: 'yoimiya',
    chinName: '宵宮',
    des: `「長野原菸花店」店長，「夏祭的女王」，將人們的願望寄託於菸花中的能工巧匠。`,
    Element: '火',
    weapon: '弓'
},
{
    engName: 'zhongli',
    chinName: '鍾離',
    des: `被「往生堂」請來的神秘客人,知識淵博,對各種事物都頗有見地。`,
    Element: '岩',
    weapon: '長柄武器'
},

]


const CharaList = styled.li`
    list-style: none;
`

const Characters = () => {
    const [character, setCharacter] = useState(allcharacters)
    const filterCharacters = (element, setFunction)=>{
        if(element === '全部'){
            setCharacter(allcharacters)    
        }
        else{
            const tmpChara =  allcharacters.filter((character)=>{
                return element === character.Element
            })
            setCharacter(tmpChara)
        }
    }
    return (
        <Container>
            <div className="fs-1 text-center">角色列表</div>
            <section className="d-flex justify-content-center">
                <ButtonGroup className="me-2" aria-label="First group">
                    <Button variant="secondary" onClick={()=> filterCharacters("全部")}>全部</Button>
                    <Button variant="secondary" onClick={()=> filterCharacters('水')}>水</Button>
                    <Button variant="secondary" onClick={()=> filterCharacters('火')}>火</Button>
                    <Button variant="secondary" onClick={()=> filterCharacters('風')}>風</Button>
                    <Button variant="secondary" onClick={()=> filterCharacters('雷')}>雷</Button>
                    <Button variant="secondary" onClick={()=> filterCharacters('冰')}>冰</Button>
                    <Button variant="secondary" onClick={()=> filterCharacters('岩')}>岩</Button>
                    <Button variant="secondary" onClick={()=> filterCharacters('所有屬性')}>旅行者</Button>
                </ButtonGroup>
            </section>
            <br />
            <ul className="d-flex flex-wrap justify-content-center">
                {
                    character.map((element) => (
                        <CharaList key={element.chinName} className="mx-3">                            
                            <img src={require(`images/head/${element.engName}.png`)} alt={element.chinName} width="150"></img>
                            <div className="fs-5 text-center">{element.chinName}</div>
                        </CharaList>
                        
                    ))
                }
            </ul>
        </Container>

    )
}

export default Characters