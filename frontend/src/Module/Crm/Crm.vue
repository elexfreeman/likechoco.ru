<template>
    <div class="crm">
        <Menu />
        <div class="main-tpl">
            <div class="menu-tpl"></div>
            <div class="content-tpl">
                <router-view class="view"></router-view>
            </div>
        </div>
    </div>
</template>

<script lang='ts' src="./Crm.ts" />


<style lang="scss">
</style>