<template>
    <div class="t2e">
        <button @click="table">click</button>
    </div>
</template>

<script>
    import {export2Excel} from '../utils/export2Excel'

    export default {
        data() {
            return {
                tHeader: [
                    // '鲜花',
                    // '颜色',
                    // '照片'
                ],
                tbody: [
                    {
                    name: '玫瑰花',
                    color: '红色',
                    age: 20,
                    pic: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2801998497,4036145562&fm=27&gp=0.jpg'
                    },
                    {
                    name: '菊花',
                    color: '黄色',
                    age: 20,
                    pic: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1506844670,1837003941&fm=200&gp=0.jpg'
                    }
                ]
            }
        },
        methods: {
            table () {
                export2Excel(this.tHeader, this.tbody, '我爱花朵')
            }
        }
    }
</script>