<template>
  <div>
    {{aRow}}
    <vue-good-table
      mode="remote"
      @on-page-change="onPageChange"
      @on-sort-change="onSortChange"
      @on-column-filter="onColumnFilter"
      @on-per-page-change="onPerPageChange"
      :totalRows="totalRecords"
      :isLoading.sync="isLoading"
      :pagination-options="{enabled: true,}"
      :columns="aColumn"
      :rows="aRow"
    >
      <template slot="table-row" slot-scope="props">
        <slot :tableData="props"></slot>
      </template>
    </vue-good-table>
  </div>
</template>

<script lang='ts' src="./CTable.ts" />


<style lang="scss">
</style>