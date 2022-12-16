<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('apprentices', function (Blueprint $table) {
            $table->id();
            $table->increments('id');
            $table->string("apprentice_name")->nullable();
            $table->string("apprentice_last_name")->nullable();
            $table->string("apprentice_email")->nullable();
            $table->decimal("apprentice_phone")->nullable();
            $table->string("apprentice_CIN")->nullable();
            $table->date("birth_date")->nullable();
            $table->string("apprentice_picture")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('apprentices');
    }
};
