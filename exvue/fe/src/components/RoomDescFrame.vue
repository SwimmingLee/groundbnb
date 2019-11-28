<template>
    <div class="roomDescFrame">
        <v-sheet>
            <h2>집 설명</h2>
            {{description}}
        </v-sheet>
        <v-sheet>
            <h2>편의시설</h2>
            <ul>
                <li>
                    방 : {{facilities.roomCnt}}개
                </li>
                <li>
                    욕실 : {{facilities.bathCnt}}개
                </li>
                <li>
                    침실 : {{facilities.bedCnt}}개
                </li>
            </ul>
        </v-sheet>
        <v-sheet>
            <h2>이용규칙</h2>
            <ul>
                <li>
                    반려동물 금지
                </li>
                <li>
                    주차공간 없음
                </li>
                <li>
                    파티, 고성방가 금지
                </li>
            </ul>
        </v-sheet>

    </div>
</template>

<script>
export default {
    name : "RoomDescFrame",
    props : ['facilities','description']
};
</script>

<style scoped>

</style>