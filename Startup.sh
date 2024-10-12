#!/bin/bash

# 检查 letsvisionos25.framer.media 文件夹是否存在
if [ -d "letsvisionos25.framer.media" ]; then
    # 如果存在，则重命名为 page
    mv letsvisionos25.framer.media page
    echo "文件夹已成功重命名为 page"
else
    echo "错误：letsvisionos25.framer.media 文件夹不存在"
fi

# 定义第一个要替换的字符串及其替换内容
OLD_STRING_1="My Framer Site"
NEW_STRING_1="Let's visionOS 2025"

# 定义第二个要替换的字符串及其替换内容
OLD_STRING_2="letsvisionos25.framer.media"
NEW_STRING_2="letsvisionos.swiftgg.team"

# 定义第三个要替换的字符串及其替换内容
OLD_STRING_3="home-zh"
NEW_STRING_3="cn"

# 定义第四个要替换的字符串及其替换内容
OLD_STRING_4="Made with Framer"
NEW_STRING_4="Made with love - SwiftGG"

# 定义要删除的标签
#OLD_TAG="<div id=\"__framer-badge-container\"></div>"
#NEW_TAG=""

OLD_PATH=".mjs\")),path:\"/cn\"}"
NEW_PATH=".mjs\")),path:\"/\"}"

# 定义要搜索的文件类型
FILE_TYPES=("html" "css" "js" "mjs" "xml")

# 遍历每种文件类型
for type in "${FILE_TYPES[@]}"; do
    # 使用 find 查找所有匹配的文件，忽略 .git 目录和 .gitignore 文件以及当前目录下的 index.html 文件
    # 然后使用 sed 进行字符串替换
    find . -type f -name "*.$type" ! -path './index.html' ! -path './.git/*' ! -name '.gitignore' -exec sed -i '' "s#${OLD_STRING_1}#${NEW_STRING_1}#g" {} +
    find . -type f -name "*.$type" ! -path './index.html' ! -path './.git/*' ! -name '.gitignore' -exec sed -i '' "s#${OLD_STRING_2}#${NEW_STRING_2}#g" {} +
    find . -type f -name "*.$type" ! -path './index.html' ! -path './.git/*' ! -name '.gitignore' -exec sed -i '' "s#${OLD_STRING_3}#${NEW_STRING_3}#g" {} +
    find . -type f -name "*.$type" ! -path './index.html' ! -path './.git/*' ! -name '.gitignore' -exec sed -i '' "s#${OLD_STRING_4}#${NEW_STRING_4}#g" {} +
    #find . -type f -name "*.$type" ! -path './index.html' ! -path './.git/*' ! -name '.gitignore' -exec sed -i '' "s#${OLD_TAG}#${NEW_TAG}#g" {} +
    find . -type f -name "*.$type" ! -path './index.html' ! -path './.git/*' ! -name '.gitignore' -exec sed -i '' "s#${OLD_PATH}#${NEW_PATH}#g" {} +
done


# 定义要删除的 div 的正则表达式模式
PATTERN='<div id="__framer-badge-container">((?:[^<]+|<(?!/div>))*</div>)*</div>'

# 定义要搜索的文件类型
FILE_TYPES=("html" "css" "js" "mjs" "xml")

# 遍历每种文件类型
for type in "${FILE_TYPES[@]}"; do
    # 使用 find 查找所有匹配的文件，然后使用 perl 进行多行正则替换
    find . -type f -name "*.$type" -exec perl -i -0pe 's/<div id="__framer-badge-container">((?:[^<]+|<(?!\/div>))*<\/div>)*<\/div>//gs' {} +
done

echo "Framer badge removal completed."


# 定义要替换的URL对
OLD_URL_1="https://drive.google.com/drive/folders/1qW0GgyQVticM_YMZ8s9o8arzARsFPBAa?usp=sharing"
NEW_URL_1="https://www.alipan.com/s/pTDZYabu6E2"

OLD_URL_2="https://drive.google.com/drive/folders/1MxTlkqwTFHSOUsi-QXiLwwKF3d3021c-?usp=sharing"
NEW_URL_2="https://www.alipan.com/s/rPacv9gn5KR"

OLD_URL_3="https://drive.google.com/drive/folders/1VEFnxydZj3X3xkPdvrgSEcx1MPq_JQCT?usp=sharing"
NEW_URL_3="https://www.alipan.com/s/h1NrYVi2M5L"

# 定义要搜索的文件类型
FILE_TYPES=("html" "css" "js" "mjs" "xml")

# 遍历每种文件类型
for type in "${FILE_TYPES[@]}"; do
    # 使用 find 查找 /page/cn 目录下所有匹配的文件，然后使用 sed 进行URL替换
    find ./page/cn -type f -name "*.$type" -exec sed -i '' "s#${OLD_URL_1}#${NEW_URL_1}#g" {} +
    find ./page/cn -type f -name "*.$type" -exec sed -i '' "s#${OLD_URL_2}#${NEW_URL_2}#g" {} +
    find ./page/cn -type f -name "*.$type" -exec sed -i '' "s#${OLD_URL_3}#${NEW_URL_3}#g" {} +
done


echo "String replacement completed."
