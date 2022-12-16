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
        Schema::create('tutors', function (Blueprint $table) {
            $table->id();
            $table->string("tutor_name")->nullable();
            $table->string("tutor_last_name")->nullable();
            $table->string("tutor_email")->nullable();
            $table->string("tutor_phone")->nullable();
            $table->string("tutor_CIN")->nullable();
            $table->string("tutor_picture")->nullable();
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
        Schema::dropIfExists('tutors');
    }
};
